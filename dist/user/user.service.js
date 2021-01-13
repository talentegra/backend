"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
const common_2 = require("src/shared/common");
const user_details_dto_1 = require("./dto/user-details.dto");
const encrypt_decrypt_service_1 = require("src/common/encrypt.decrypt.service");
const config_1 = require("src/config/config");
const mailer_service_1 = require("src/mailer/mailer.service");
const fs_1 = require("fs");
const uuid = require("uuid");
const moment = require("moment");
const usersettings_entity_1 = require("./entity/usersettings.entity");
const database_service_1 = require("src/database/database.service");
let UserService = UserService_1 = class UserService {
    constructor(userRepository, mailerService, userSettingsRepository, databaseservice) {
        this.userRepository = userRepository;
        this.mailerService = mailerService;
        this.userSettingsRepository = userSettingsRepository;
        this.databaseservice = databaseservice;
        UserService_1.userService = this;
    }
    async create(createUserDto) {
        const { userName, email } = createUserDto;
        let decryptedUserName = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(encrypt_decrypt_service_1.decryptAESString(createUserDto.userName)));
        let user = await this.userRepository.findOne({ userName: decryptedUserName });
        let usercount = await this.userRepository.count();
        console.log(usercount);
        if (usercount == 0) {
            let datainsertResponse = await this.databaseservice.insertAdminData();
            console.log(datainsertResponse);
        }
        if (user) {
            let response = {
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Username is already exists"
                },
                status: common_2.ApiResponseStatus.ERROR
            };
            return response;
        }
        user = await this.userRepository.findOne({ email });
        if (user) {
            let response = {
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Email is already exists"
                },
                status: common_2.ApiResponseStatus.ERROR
            };
            return response;
        }
        let userEntity = new user_entity_1.User();
        userEntity.userName = decryptedUserName;
        userEntity.firstName = createUserDto.firstName;
        userEntity.lastName = createUserDto.lastName;
        userEntity.email = createUserDto.email;
        userEntity.password = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(encrypt_decrypt_service_1.decryptAESString(createUserDto.password)));
        userEntity.middleName = createUserDto.middleName;
        userEntity.phone = createUserDto.phone;
        userEntity.status = createUserDto.status;
        userEntity.created_on = new Date();
        userEntity.updated_on = new Date();
        userEntity.activationKey = uuid.v4();
        const savedUser = await this.userRepository.save(userEntity);
        const mailActivationKey = savedUser.activationKey;
        let EMAIL_CONFIG = config_1.CONFIG.EMAIL;
        const emailLink = EMAIL_CONFIG.FRONTEND_HOST + EMAIL_CONFIG.FRONTEND_EMAIL_VERIFY_LINK + "user/" + mailActivationKey + "/" + savedUser.userId;
        const mailcontent = {
            to: userEntity.email,
            subject: "Account Verification",
            templateName: "user.signup.email.html"
        };
        let fullName = userEntity.firstName + " " + (userEntity.middleName ? userEntity.middleName : "") + " " + userEntity.lastName;
        var templateObj = {
            email: userEntity.email,
            link: emailLink,
            host: config_1.CONFIG.EMAIL.BACKEND_HOST,
            userName: fullName
        };
        this.mailerService.sendMail(mailcontent, templateObj);
        let response = {
            data: createUserDto,
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return response;
    }
    async update(updateUserDto) {
        let user = await this.userRepository.findOne(updateUserDto.userId);
        if (user == null) {
            let error = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "User not found"
                }
            };
            return error;
        }
        user = Object.assign({}, user, updateUserDto);
        if (updateUserDto.image) {
            let fileExtension = updateUserDto.imageName.split(".")[1];
            await fs_1.promises.writeFile(config_1.CONFIG.USER.PROFILE_IMG_PATH + "/" + user.userId + "." + fileExtension, updateUserDto.image + "", { encoding: 'base64' });
        }
        await this.userRepository.save(user);
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return response;
    }
    async login(loginUserDto) {
        let { userName, password } = loginUserDto;
        let originalUserName = encrypt_decrypt_service_1.decryptAESString(userName);
        let originalPassword = encrypt_decrypt_service_1.decryptAESString(password);
        userName = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(originalUserName));
        password = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(originalPassword));
        const user = await this.userRepository.findOne({ userName, password });
        if (user) {
            if (user.activationKey != encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(config_1.CONFIG.EMAIL.VERIFIED_KEY))) {
                const errors = { message: 'Please verify your email before login.' };
                let response = {
                    error: {
                        type: common_2.ErrorMessageType.ERROR,
                        message: errors.message
                    },
                    status: common_2.ApiResponseStatus.ERROR
                };
                return response;
            }
            let detailsDto = new user_details_dto_1.UserDetailsDto();
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
            if (imageName) {
                let extentsion = imageName.split(".")[1];
                detailsDto.image = await fs_1.promises.readFile(config_1.CONFIG.USER.PROFILE_IMG_PATH + "/" + detailsDto.userId + "." + extentsion, { encoding: 'base64' });
                detailsDto.fileExtension = extentsion;
            }
            let response = {
                data: detailsDto,
                status: common_2.ApiResponseStatus.SUCCESS
            };
            return response;
        }
        else {
            const errors = { message: 'Invalid credetials. Username or Password mismatched.' };
            let response = {
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: errors.message
                },
                status: common_2.ApiResponseStatus.ERROR
            };
            return response;
        }
    }
    findAll() {
        return this.userRepository.find();
    }
    async findById(id) {
        let user = await this.userRepository.findOne(id);
        if (user) {
            let detailsDto = new user_details_dto_1.UserDetailsDto();
            detailsDto.email = user.email;
            detailsDto.firstName = user.firstName;
            detailsDto.lastName = user.lastName;
            detailsDto.userName = user.userName;
            detailsDto.userId = user.userId;
            detailsDto.activationKey = user.activationKey;
            let imageName = user.imageName;
            if (imageName) {
                let extentsion = imageName.split(".")[1];
                detailsDto.image = await fs_1.promises.readFile(config_1.CONFIG.USER.PROFILE_IMG_PATH + "/" + detailsDto.userId + "." + extentsion, { encoding: 'base64' });
                detailsDto.fileExtension = extentsion;
            }
            let response = {
                data: detailsDto,
                status: common_2.ApiResponseStatus.SUCCESS
            };
            return response;
        }
        else {
            const errors = { message: 'Invalid credetials. Username or Password mismatched.' };
            let response = {
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: errors.message
                },
                status: common_2.ApiResponseStatus.ERROR
            };
            return response;
        }
    }
    async updateUser(userDetails) {
        let { userId } = userDetails, userInfo = __rest(userDetails, ["userId"]);
        console.log(__dirname);
        let userResponse;
        try {
            await this.userRepository.createQueryBuilder().update(user_entity_1.User).set(userInfo).where("userId =:userId", { userId }).execute();
            userResponse = {
                data: true,
                status: common_2.ApiResponseStatus.SUCCESS
            };
        }
        catch (error) {
            console.log(error);
            userResponse = {
                data: false,
                status: common_2.ApiResponseStatus.ERROR
            };
        }
        return userResponse;
    }
    async forgotpassword(userEmail) {
        let userDetails = await this.userRepository.findOne({ email: userEmail.email });
        let response;
        if (userDetails) {
            userDetails.forgotPasswordKey = uuid.v4();
            userDetails.forgotPasswordCreationTime = new Date();
            await this.userRepository.save(userDetails);
            let EMAIL_CONFIG = config_1.CONFIG.EMAIL;
            const emailLink = EMAIL_CONFIG.FRONTEND_HOST + EMAIL_CONFIG.FRONTEND_RESET_PASSWORD_LINK + "user/" + userDetails.forgotPasswordKey + "/" + userDetails.userId;
            let fullName = userDetails.firstName + " " + (userDetails.middleName ? userDetails.middleName : "") + " " + userDetails.lastName;
            const mailcontent = {
                to: userDetails.email,
                subject: "Password Reset",
                templateName: "reset.password.email.html"
            };
            var templateObj = {
                email: userDetails.email,
                link: emailLink,
                host: config_1.CONFIG.EMAIL.BACKEND_HOST,
                userName: fullName
            };
            this.mailerService.sendMail(mailcontent, templateObj);
            response = {
                status: common_2.ApiResponseStatus.SUCCESS,
                data: true,
            };
        }
        else {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Email id not found please check."
                },
            };
        }
        return response;
    }
    async verifyPasswordLink(resetPasswordDto) {
        let userDetails = await this.userRepository.findOne(resetPasswordDto.userId);
        let response;
        if (!userDetails) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "User id not found please check."
                },
            };
            return response;
        }
        if (userDetails.forgotPasswordKey != resetPasswordDto.forgotPasswordId) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Invalid Link. Please contact system admin."
                },
            };
            return response;
        }
        let linkCreationDate = moment(userDetails.forgotPasswordCreationTime);
        let duration = moment.duration(moment().diff(linkCreationDate));
        let hoursAsLinkCreated = duration.asHours();
        if (hoursAsLinkCreated > config_1.CONFIG.EMAIL.FORGOT_PWD_LINK_EXPIRY) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Reset Password link Expired. Please regenerate and try again."
                },
            };
            return response;
        }
        response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: true
        };
        return response;
    }
    async resetPassword(resetPasswordDto) {
        let response = await this.verifyPasswordLink(resetPasswordDto);
        if (response.status === common_2.ApiResponseStatus.ERROR) {
            return response;
        }
        let userDetails = await this.userRepository.findOne(resetPasswordDto.userId);
        userDetails.password = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(encrypt_decrypt_service_1.decryptAESString(resetPasswordDto.password)));
        userDetails.forgotPasswordKey = null;
        await this.userRepository.save(userDetails);
        response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: true
        };
        return response;
    }
    async insertDefaultUserSettings(userId) {
        let userDetails = await this.userRepository.findOne(userId);
        let defaultUserSettings = new usersettings_entity_1.UserSettings();
        let savedUserSettings = await this.userSettingsRepository.save(defaultUserSettings);
        userDetails.settings = Promise.resolve(savedUserSettings);
        this.userRepository.save(userDetails);
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: true
        };
        return response;
    }
    ;
    async updateUserSettings(updateUserSettingsDto) {
        let userSettings = await this.userSettingsRepository.findOne(updateUserSettingsDto.settingId);
        let response;
        if (userSettings == null) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Settings not found."
                }
            };
            return response;
        }
        let updatedUserSettingsDto = Object.assign({}, userSettings, updateUserSettingsDto);
        await this.userSettingsRepository.save(updatedUserSettingsDto);
        response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: true
        };
        return response;
    }
};
UserService = UserService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, common_1.Inject(common_1.forwardRef(() => mailer_service_1.MailerService))),
    __param(2, typeorm_1.InjectRepository(usersettings_entity_1.UserSettings)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_service_1.MailerService,
        typeorm_2.Repository, database_service_1.DatabaseService])
], UserService);
exports.UserService = UserService;
var UserService_1;
//# sourceMappingURL=user.service.js.map