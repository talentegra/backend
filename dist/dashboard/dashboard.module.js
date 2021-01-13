"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dashboard_controller_1 = require("./dashboard.controller");
const dashboard_service_1 = require("./dashboard.service");
const hospitals_module_1 = require("src/hospitals/hospitals.module");
const departments_module_1 = require("src/departments/departments.module");
const modules_module_1 = require("src/modules/modules.module");
const pages_module_1 = require("src/pages/pages.module");
const countries_module_1 = require("src/countries/countries.module");
const states_module_1 = require("src/states/states.module");
const cities_module_1 = require("src/cities/cities.module");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    common_1.Module({
        imports: [
            hospitals_module_1.HospitalsModule,
            departments_module_1.DepartmentsModule,
            modules_module_1.ModulesModule,
            pages_module_1.PagesModule,
            countries_module_1.CountriesModule,
            states_module_1.StatesModule,
            cities_module_1.CitiesModule
        ],
        controllers: [dashboard_controller_1.DashboardController],
        providers: [dashboard_service_1.DashboardService],
        exports: [dashboard_service_1.DashboardService]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map