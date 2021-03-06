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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerController = void 0;
const common_1 = require("@nestjs/common");
const mailer_service_1 = require("./mailer.service");
const common_2 = require("../shared/common");
let MailerController = class MailerController {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    verifyUserEmail(userEmailVerify) {
        return this.mailerService.verifyUserEmail(userEmailVerify);
    }
    verifyHospitalEmail(hospitalEmailVerify) {
        return this.mailerService.verifyHosiptalEmail(hospitalEmailVerify);
    }
};
__decorate([
    common_1.Post("useremailverify"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailerController.prototype, "verifyUserEmail", null);
__decorate([
    common_1.Post("hospitalemailverify"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailerController.prototype, "verifyHospitalEmail", null);
MailerController = __decorate([
    common_1.Controller('mailer'),
    __metadata("design:paramtypes", [mailer_service_1.MailerService])
], MailerController);
exports.MailerController = MailerController;
//# sourceMappingURL=mailer.controller.js.map