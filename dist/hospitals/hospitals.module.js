"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hospitals_controller_1 = require("./hospitals.controller");
const hospitals_service_1 = require("./hospitals.service");
const typeorm_1 = require("@nestjs/typeorm");
const hospitals_entity_1 = require("./entity/hospitals.entity");
const mailer_module_1 = require("src/mailer/mailer.module");
let HospitalsModule = class HospitalsModule {
};
HospitalsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([hospitals_entity_1.Hospitals]), common_1.forwardRef(() => mailer_module_1.MailerModule), common_1.HttpModule],
        controllers: [hospitals_controller_1.HospitalsController],
        providers: [hospitals_service_1.HospitalsService],
        exports: [hospitals_service_1.HospitalsService]
    })
], HospitalsModule);
exports.HospitalsModule = HospitalsModule;
//# sourceMappingURL=hospitals.module.js.map