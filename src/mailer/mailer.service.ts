import * as nodemailer from 'nodemailer';

import { promises as fs } from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import { CONFIG } from 'src/config/config';

import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { MailContent, UserEmailVerify, HosiptalEmailVerify } from './dto/mailer.dto';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from 'src/shared/common';
import { UserService } from 'src/user/user.service';
import { UserDetailsDto } from 'src/user/dto/user-details.dto';
import { getEncryptedMD5Value,getEncryptedShaValue } from 'src/common/encrypt.decrypt.service';
import { HospitalsService } from 'src/hospitals/hospitals.service';
import { Hospitals } from 'src/hospitals/entity/hospitals.entity';

@Injectable()
export class MailerService {
    private transporter;

    constructor(@Inject(forwardRef(()=>UserService))private userService:UserService,
                 @Inject(forwardRef(()=>HospitalsService)) private hospitalService:HospitalsService){

    }
    async verifyUserEmail( userEmailVerify : UserEmailVerify):Promise<ApiResponse<boolean>>{

        let userResponse = await this.userService.findById(userEmailVerify.userId); 
        let response:ApiResponse<boolean>; 
        if(userResponse.status == ApiResponseStatus.ERROR){
            // invalid user
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Invalid User",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }
        let userData = userResponse.data as UserDetailsDto;
        let verifiedMD5Value = getEncryptedMD5Value(getEncryptedShaValue(CONFIG.EMAIL.VERIFIED_KEY));
        if(userData.activationKey && userData.activationKey === verifiedMD5Value){
            // send message already verified
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Hi your email has been verified already",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }
        if(userData.activationKey && userData.activationKey != userEmailVerify.activationId){
            // throw Invalid Link 
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Invalid Link. Please contact system admin.",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }      
        let userUpdateResonse = await this.userService.updateUser({userId : userEmailVerify.userId,activationKey:verifiedMD5Value});
        if(userUpdateResonse.status == ApiResponseStatus.ERROR){
            // handle error
        }

        // insert default user settings
        await this.userService.insertDefaultUserSettings(userEmailVerify.userId);
        response= {
            data:true,
            status:ApiResponseStatus.SUCCESS
        }
        return response;
    }

    async verifyHosiptalEmail(hospitalEmailVerify : HosiptalEmailVerify):Promise<ApiResponse<boolean>>{
        let hospitalResponse = await this.hospitalService.findById(hospitalEmailVerify.hospitalsId); 
        let response:ApiResponse<boolean>; 
        if(hospitalResponse.status == ApiResponseStatus.ERROR){
            // invalid user
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Invalid Hospital",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }
        let hospitaldata = hospitalResponse.data as Hospitals;
        let verifiedMD5Value = getEncryptedMD5Value(getEncryptedShaValue(CONFIG.EMAIL.VERIFIED_KEY));
        if(hospitaldata.activationKey && hospitaldata.activationKey === verifiedMD5Value){
            // send message already verified
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Hi your email has been verified already",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }
        if(hospitaldata.activationKey && hospitaldata.activationKey != hospitalEmailVerify.activationId){
            // throw Invalid Link 
            response = {
                status:ApiResponseStatus.ERROR,
                data:false,
                error:{
                    message:"Invalid Link. Please contact system admin.",
                    type:ErrorMessageType.ERROR
                }
            }
            return response;
        }      
        let hospitalUpdateResonse = await this.hospitalService.updateHospital({hospitalsId : hospitalEmailVerify.hospitalsId,activationKey:verifiedMD5Value});
        if(hospitalUpdateResonse.status == ApiResponseStatus.ERROR){
            // handle error
        }
        response= {
            data:true,
            status:ApiResponseStatus.SUCCESS
        }
        return response;
    }


     async sendMail(mailContent:MailContent ,templateObject:any){

        let {templateName,...mailInfo} =mailContent;
        var transporter = this.transporterObject();
      
        var templateContent = await this.getTemplateContent(templateName);
        var template = handlebars.compile(templateContent);
      
        var htmlToSend = template(templateObject);
        var mailOptions = {
          from: CONFIG.EMAIL.AUTH.username,
          ...mailInfo,
          html: htmlToSend
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(`error: ${error}`);
          }
          console.log(`Message Sent ${info.response}`);
        });
      
    }

    getTemplateContent = async (templateName:string) => {
        const data = await fs.readFile(path.join(__dirname, `../../public/asset/EmailTemplate/${templateName}`), { encoding: 'utf8' });
        return data;
    }

    

    transporterObject(){
        if(this.transporter) return this.transporter;

        this.transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: true,
            auth: {
              user: CONFIG.EMAIL.AUTH.username,
              pass:  CONFIG.EMAIL.AUTH.password
            },    
            tls: {
              rejectUnauthorized: false
            }
          }); 
       
        
        /*  this.transporter =  nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            secure: false,
            port: 587,
            auth: {
              user: CONFIG.EMAIL.AUTH.username,
              pass:  CONFIG.EMAIL.AUTH.password
            },    
            tls: {
              rejectUnauthorized: false
            }
          });  */

          return this.transporter;
    }
}
