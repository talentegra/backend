"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const license_histroy_controller_1 = require("./license-histroy.controller");
const license_histroy_service_1 = require("./license-histroy.service");
const typeorm_1 = require("@nestjs/typeorm");
const licence_histroy_entity_1 = require("./entity/licence-histroy.entity");
const hospitals_module_1 = require("../hospitals/hospitals.module");
const pages_module_1 = require("../pages/pages.module");
const departments_module_1 = require("../departments/departments.module");
let LicenseHistroyModule = class LicenseHistroyModule {
};
LicenseHistroyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([licence_histroy_entity_1.LicenseHistroy]), hospitals_module_1.HospitalsModule, departments_module_1.DepartmentsModule, pages_module_1.PagesModule],
        controllers: [license_histroy_controller_1.LicenseHistroyController],
        providers: [license_histroy_service_1.LicenseHistroyService],
        exports: [license_histroy_service_1.LicenseHistroyService],
    })
], LicenseHistroyModule);
exports.LicenseHistroyModule = LicenseHistroyModule;
//# sourceMappingURL=license-histroy.module.js.map