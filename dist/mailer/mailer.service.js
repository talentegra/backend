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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const nodemailer = require("nodemailer");
const fs_1 = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const config_1 = require("../config/config");
const common_1 = require("@nestjs/common");
const common_2 = require("../shared/common");
const user_service_1 = require("../user/user.service");
const user_details_dto_1 = require("../user/dto/user-details.dto");
const encrypt_decrypt_service_1 = require("../common/encrypt.decrypt.service");
const hospitals_service_1 = require("../hospitals/hospitals.service");
const hospitals_entity_1 = require("../hospitals/entity/hospitals.entity");
let MailerService = class MailerService {
    constructor(userService, hospitalService) {
        this.userService = userService;
        this.hospitalService = hospitalService;
        this.getTemplateContent = async (templateName) => {
            const data = await fs_1.promises.readFile(path.join(__dirname, `../../public/asset/EmailTemplate/${templateName}`), { encoding: 'utf8' });
            return data;
        };
    }
    async verifyUserEmail(userEmailVerify) {
        let userResponse = await this.userService.findById(userEmailVerify.userId);
        let response;
        if (userResponse.status == common_2.ApiResponseStatus.ERROR) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Invalid User",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        let userData = userResponse.data;
        let verifiedMD5Value = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(config_1.CONFIG.EMAIL.VERIFIED_KEY));
        if (userData.activationKey && userData.activationKey === verifiedMD5Value) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Hi your email has been verified already",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        if (userData.activationKey && userData.activationKey != userEmailVerify.activationId) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Invalid Link. Please contact system admin.",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        let userUpdateResonse = await this.userService.updateUser({ userId: userEmailVerify.userId, activationKey: verifiedMD5Value });
        if (userUpdateResonse.status == common_2.ApiResponseStatus.ERROR) {
        }
        await this.userService.insertDefaultUserSettings(userEmailVerify.userId);
        response = {
            data: true,
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return response;
    }
    async verifyHosiptalEmail(hospitalEmailVerify) {
        let hospitalResponse = await this.hospitalService.findById(hospitalEmailVerify.hospitalsId);
        let response;
        if (hospitalResponse.status == common_2.ApiResponseStatus.ERROR) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Invalid Hospital",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        let hospitaldata = hospitalResponse.data;
        let verifiedMD5Value = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(config_1.CONFIG.EMAIL.VERIFIED_KEY));
        if (hospitaldata.activationKey && hospitaldata.activationKey === verifiedMD5Value) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Hi your email has been verified already",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        if (hospitaldata.activationKey && hospitaldata.activationKey != hospitalEmailVerify.activationId) {
            response = {
                status: common_2.ApiResponseStatus.ERROR,
                data: false,
                error: {
                    message: "Invalid Link. Please contact system admin.",
                    type: common_2.ErrorMessageType.ERROR
                }
            };
            return response;
        }
        let hospitalUpdateResonse = await this.hospitalService.updateHospital({ hospitalsId: hospitalEmailVerify.hospitalsId, activationKey: verifiedMD5Value });
        if (hospitalUpdateResonse.status == common_2.ApiResponseStatus.ERROR) {
        }
        response = {
            data: true,
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return response;
    }
    async sendMail(mailContent, templateObject) {
        let { templateName } = mailContent, mailInfo = __rest(mailContent, ["templateName"]);
        var transporter = this.transporterObject();
        var templateContent = await this.getTemplateContent(templateName);
        var template = handlebars.compile(templateContent);
        var htmlToSend = template(templateObject);
        var mailOptions = Object.assign(Object.assign({ from: config_1.CONFIG.EMAIL.AUTH.username }, mailInfo), { html: htmlToSend });
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(`error: ${error}`);
            }
            console.log(`Message Sent ${info.response}`);
        });
    }
    transporterObject() {
        if (this.transporter)
            return this.transporter;
        this.transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: true,
            auth: {
                user: config_1.CONFIG.EMAIL.AUTH.username,
                pass: config_1.CONFIG.EMAIL.AUTH.password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        return this.transporter;
    }
};
MailerService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __param(1, common_1.Inject(common_1.forwardRef(() => hospitals_service_1.HospitalsService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        hospitals_service_1.HospitalsService])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map