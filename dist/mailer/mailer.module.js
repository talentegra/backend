"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mailer_controller_1 = require("./mailer.controller");
const mailer_service_1 = require("./mailer.service");
const user_module_1 = require("src/user/user.module");
const hospitals_module_1 = require("src/hospitals/hospitals.module");
let MailerModule = class MailerModule {
};
MailerModule = __decorate([
    common_1.Module({
        imports: [common_1.forwardRef(() => user_module_1.UserModule), common_1.forwardRef(() => hospitals_module_1.HospitalsModule)],
        controllers: [mailer_controller_1.MailerController],
        providers: [mailer_service_1.MailerService],
        exports: [mailer_service_1.MailerService]
    })
], MailerModule);
exports.MailerModule = MailerModule;
//# sourceMappingURL=mailer.module.js.map