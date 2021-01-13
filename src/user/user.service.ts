import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, UpdateResult } from 'typeorm';
import { User } from "./entity/user.entity";
import { CreateUserDto, LoginUserDto} from "./dto";
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from "src/shared/common";
import { UserDetailsDto } from "./dto/user-details.dto";
import { UpdateUserDto,UserEmail, ResetPasswordDto } from "./dto/create-user.dto";
import { decryptAESString, getEncryptedMD5Value, getEncryptedShaValue } from "src/common/encrypt.decrypt.service";
import { CONFIG } from "src/config/config";
import { MailerService } from "src/mailer/mailer.service";
import { MailContent } from "src/mailer/dto/mailer.dto";
import { promises as fs } from 'fs';
import * as uuid from "uuid";
import * as moment from 'moment'
import { UserSettings } from "./entity/usersettings.entity";
import { UpdateUserSettingsDto } from "./dto/update-user.dto";
import { DatabaseService } from "src/database/database.service";


@Injectable()
export class UserService{   

        static userService : UserService;
        constructor(
            @InjectRepository(User)private userRepository: Repository<User>,
            @Inject(forwardRef(()=>MailerService))private mailerService:MailerService,
            @InjectRepository(UserSettings)private userSettingsRepository: Repository<UserSettings>, private databaseservice :  DatabaseService ){
            UserService.userService = this;
        }

        async create(createUserDto:CreateUserDto):Promise<ApiResponse<CreateUserDto>>{
            
            const {userName, email}:Partial<CreateUserDto> = createUserDto;          
            let decryptedUserName = getEncryptedMD5Value(getEncryptedShaValue(decryptAESString(createUserDto.userName)));
            let user = await this.userRepository.findOne({userName:decryptedUserName});
            let usercount = await this.userRepository.count();
            console.log(usercount);
            if ( usercount == 0 ) {

                let datainsertResponse = await this.databaseservice.insertAdminData();
                console.log(datainsertResponse);


            }

            if (user) {
                    let response:ApiResponse<CreateUserDto> = {
                        error:{
                            type:ErrorMessageType.ERROR,
                            message:"Username is already exists"
                        },
                        status:ApiResponseStatus.ERROR
                    };
                    return response;
            }

            user = await this.userRepository.findOne({email});

            if (user) {
                let response:ApiResponse<CreateUserDto> = {
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Email is already exists"
                    },
                        status:ApiResponseStatus.ERROR
                    };
                    return response;
            }
            
            let userEntity = new User();
            userEntity.userName = decryptedUserName;
            userEntity.firstName = createUserDto.firstName;
            userEntity.lastName = createUserDto.lastName;
            userEntity.email = createUserDto.email;
            userEntity.password = getEncryptedMD5Value(getEncryptedShaValue(decryptAESString(createUserDto.password)));
            userEntity.middleName = createUserDto.middleName;
            userEntity.phone = createUserDto.phone;
            userEntity.status = createUserDto.status;
            userEntity.created_on = new Date();
            userEntity.updated_on = new Date();
            userEntity.activationKey = uuid.v4();
            const savedUser = await this.userRepository.save(userEntity);

            const mailActivationKey = savedUser.activationKey;
            let EMAIL_CONFIG = CONFIG.EMAIL;
            const emailLink =EMAIL_CONFIG.FRONTEND_HOST+EMAIL_CONFIG.FRONTEND_EMAIL_VERIFY_LINK+"user/"+mailActivationKey+"/"+savedUser.userId;

            const mailcontent : MailContent = {
                to:userEntity.email,
                subject : "Account Verification",
                templateName:"user.signup.email.html"
            }

            let fullName = userEntity.firstName +" "+ (userEntity.middleName ? userEntity.middleName : "")+" "+userEntity.lastName;

            var templateObj :any = {
                email:userEntity.email,
                link : emailLink,
                host :  CONFIG.EMAIL.BACKEND_HOST,
                userName: fullName
            }

            this.mailerService.sendMail(mailcontent,templateObj);

            let response:ApiResponse<CreateUserDto> = {
                data:createUserDto,
                status:ApiResponseStatus.SUCCESS
            }
            return response;
        }

        async update(updateUserDto:UpdateUserDto):Promise<ApiResponse<UpdateUserDto>>{

           let user = await this.userRepository.findOne(updateUserDto.userId);
           if(user == null){
               let error:ApiResponse<UpdateUserDto>={
                   status:ApiResponseStatus.ERROR,
                   error: {
                       type:ErrorMessageType.ERROR,
                       message:"User not found"
                   }
               }
               return error;
           }

           user = {...user,...updateUserDto};

           if(updateUserDto.image){
               let fileExtension = updateUserDto.imageName.split(".")[1];
               // write file in the desk
                await fs.writeFile(CONFIG.USER.PROFILE_IMG_PATH + "/" + user.userId+"."+fileExtension, updateUserDto.image+"", { encoding: 'base64' });
           }

           await this.userRepository.save(user)
           let response:ApiResponse<UpdateUserDto>={
                status:ApiResponseStatus.SUCCESS                
            }
            return response;
        }

        async login(loginUserDto:LoginUserDto):Promise<ApiResponse<UserDetailsDto>>{
            let {userName,password} = loginUserDto;

            // decryp username and password
            let originalUserName = decryptAESString(userName);
            let originalPassword = decryptAESString(password);

            userName = getEncryptedMD5Value(getEncryptedShaValue(originalUserName));
            password = getEncryptedMD5Value(getEncryptedShaValue(originalPassword));

            const user = await this.userRepository.findOne({userName,password});
            if (user) {
                if(user.activationKey != getEncryptedMD5Value(getEncryptedShaValue(CONFIG.EMAIL.VERIFIED_KEY))){
                    const errors = {message: 'Please verify your email before login.'};
                    let response:ApiResponse<UserDetailsDto> = {
                        error:{
                            type:ErrorMessageType.ERROR,
                            message:errors.message
                        },
                        status:ApiResponseStatus.ERROR
                    };
                    return response;
                }
                let detailsDto:UserDetailsDto = new UserDetailsDto();               
                detailsDto.email = user.email;
                detailsDto.firstName = user.firstName;
                detailsDto.lastName = user.lastName;
                detailsDto.userName = user.userName;
                detailsDto.middleName = user.middleName;              
                detailsDto.status = user.status;
                detailsDto.userId = user.userId; 
                detailsDto.phone = user.phone;
                detailsDto.settings = await user.settings;

                let imageName = user.imageName;
                if(imageName){
                    let extentsion = imageName.split(".")[1];
                    detailsDto.image= await fs.readFile(CONFIG.USER.PROFILE_IMG_PATH+"/"+detailsDto.userId+"."+extentsion, { encoding: 'base64' });
                    detailsDto.fileExtension = extentsion;
                }

                let response:ApiResponse<UserDetailsDto> = {
                    data:detailsDto,
                    status:ApiResponseStatus.SUCCESS
                };
                return response;
            }else{
                const errors = {message: 'Invalid credetials. Username or Password mismatched.'};
                let response:ApiResponse<UserDetailsDto> = {
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:errors.message
                    },
                    status:ApiResponseStatus.ERROR
                };
                return response;
            }

        }

        findAll():Promise<User[]>{
           return this.userRepository.find();
        }

        async findById(id):Promise<ApiResponse<UserDetailsDto>>{
            let user = await this.userRepository.findOne(id);
            if(user){
                let detailsDto:UserDetailsDto = new UserDetailsDto();               
                detailsDto.email = user.email;
                detailsDto.firstName = user.firstName;
                detailsDto.lastName = user.lastName;
                detailsDto.userName = user.userName;
                detailsDto.userId= user.userId;
                detailsDto.activationKey = user.activationKey;
                let imageName = user.imageName;
                if(imageName){
                    let extentsion = imageName.split(".")[1];
                    detailsDto.image= await fs.readFile(CONFIG.USER.PROFILE_IMG_PATH+"/"+detailsDto.userId+"."+extentsion, { encoding: 'base64' });
                    detailsDto.fileExtension = extentsion;
                }
                let response:ApiResponse<UserDetailsDto> = {
                    data:detailsDto,
                    status:ApiResponseStatus.SUCCESS
                };
                return response;
            }else{
                const errors = {message: 'Invalid credetials. Username or Password mismatched.'};
                let response:ApiResponse<UserDetailsDto> = {
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:errors.message
                    },
                    status:ApiResponseStatus.ERROR
                };
                return response;
            }
            
        }

        async updateUser(userDetails:Partial<User>):Promise<ApiResponse<boolean>>{
            let {userId, ...userInfo} = userDetails;
            console.log(__dirname);
            let userResponse:ApiResponse<boolean>;
            try {
                await this.userRepository.createQueryBuilder().update(User).set(userInfo).where("userId =:userId",{userId}).execute();
                userResponse={
                    data:true,
                    status:ApiResponseStatus.SUCCESS
                }
            } catch (error) {
                console.log(error);
                userResponse={
                    data:false,
                    status:ApiResponseStatus.ERROR
                } 
            }
            
            return userResponse;
        }

        async forgotpassword(userEmail:UserEmail):Promise<ApiResponse<boolean>> {
            let userDetails = await this.userRepository.findOne({email:userEmail.email});
            let response:ApiResponse<boolean>;
            if(userDetails){

                userDetails.forgotPasswordKey = uuid.v4();
                userDetails.forgotPasswordCreationTime = new Date();
                
                await this.userRepository.save(userDetails);

                let EMAIL_CONFIG = CONFIG.EMAIL;
                const emailLink = EMAIL_CONFIG.FRONTEND_HOST+EMAIL_CONFIG.FRONTEND_RESET_PASSWORD_LINK+"user/"+userDetails.forgotPasswordKey +"/"+userDetails.userId;

                let fullName = userDetails.firstName +" "+ (userDetails.middleName ? userDetails.middleName : "")+" "+userDetails.lastName;

                const mailcontent : MailContent = {
                    to:userDetails.email,
                    subject : "Password Reset",
                    templateName:"reset.password.email.html"                    
                }

                var templateObj :any = {
                    email:userDetails.email,
                    link : emailLink,
                    host :  CONFIG.EMAIL.BACKEND_HOST,
                    userName:fullName
                }

                this.mailerService.sendMail(mailcontent,templateObj);

                response={
                    status:ApiResponseStatus.SUCCESS,
                    data:true,
                }
            }else{
                response={
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Email id not found please check."
                    },
                }
            }
            return response;
        }

        async verifyPasswordLink(resetPasswordDto : ResetPasswordDto):Promise<ApiResponse<boolean>>{
            let userDetails = await this.userRepository.findOne(resetPasswordDto.userId);
            let response:ApiResponse<boolean>;
            if(!userDetails){
                response={
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"User id not found please check."
                    },
                }
                return response;
            } 

            if(userDetails.forgotPasswordKey != resetPasswordDto.forgotPasswordId){
                response={
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Invalid Link. Please contact system admin."
                    },
                }
                return response;
            }

            // Link Expired
            let linkCreationDate = moment(userDetails.forgotPasswordCreationTime);
            let duration = moment.duration(moment().diff(linkCreationDate));
            let hoursAsLinkCreated = duration.asHours();
            if(hoursAsLinkCreated > CONFIG.EMAIL.FORGOT_PWD_LINK_EXPIRY ){
                response={
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Reset Password link Expired. Please regenerate and try again."
                    },
                }
                return response;
            }

            response={
                status:ApiResponseStatus.SUCCESS,
                data:true               
            }
            return response;
        }

        async resetPassword(resetPasswordDto : ResetPasswordDto):Promise<ApiResponse<boolean>>{
            let response = await this.verifyPasswordLink(resetPasswordDto);
            if(response.status === ApiResponseStatus.ERROR){
                return response;
            }

            let userDetails = await this.userRepository.findOne(resetPasswordDto.userId);
            userDetails.password =  getEncryptedMD5Value(getEncryptedShaValue(decryptAESString(resetPasswordDto.password)));
            userDetails.forgotPasswordKey = null;
           await  this.userRepository.save(userDetails);
           response={
                status:ApiResponseStatus.SUCCESS,
                data:true               
            }
            return response;
        }

        async insertDefaultUserSettings(userId):Promise<ApiResponse<boolean>>{
             let userDetails = await this.userRepository.findOne(userId);
             let defaultUserSettings = new UserSettings();
             let savedUserSettings = await this.userSettingsRepository.save(defaultUserSettings);
             userDetails.settings = Promise.resolve(savedUserSettings);
             this.userRepository.save(userDetails);
            let response={
                status:ApiResponseStatus.SUCCESS,
                data:true               
            }
             return response;
        };

        async updateUserSettings(updateUserSettingsDto: UpdateUserSettingsDto):Promise<ApiResponse<boolean>> {
            let userSettings = await this.userSettingsRepository.findOne(updateUserSettingsDto.settingId);
            let response:ApiResponse<boolean>;
            if(userSettings == null){
                response={
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Settings not found."
                    }             
                }
                return response;
            }
            let updatedUserSettingsDto = {...userSettings,...updateUserSettingsDto};
            await this.userSettingsRepository.save(updatedUserSettingsDto);
            response={
                    status:ApiResponseStatus.SUCCESS,
                    data:true               
                }
            return response;
        }  
}