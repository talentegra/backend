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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../shared/common");
const hospitals_service_1 = require("../hospitals/hospitals.service");
const departments_service_1 = require("../departments/departments.service");
const modules_service_1 = require("../modules/modules.service");
const pages_service_1 = require("../pages/pages.service");
const countries_service_1 = require("../countries/countries.service");
const states_service_1 = require("../states/states.service");
const cities_service_1 = require("../cities/cities.service");
let DashboardService = class DashboardService {
    constructor(hospitalService, departmentService, moduleService, pageService, countryService, stateService, cityService) {
        this.hospitalService = hospitalService;
        this.departmentService = departmentService;
        this.moduleService = moduleService;
        this.pageService = pageService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.cityService = cityService;
    }
    async getAllcounts() {
        let response;
        let countList;
        let clientCount = await this.hospitalService.getCount([{ status: 1 }]);
        let departmentCount = await this.departmentService.getCount([{ status: 1 }]);
        let moduleCount = await this.moduleService.getCount([{ status: 1 }]);
        let pageCount = await this.pageService.getCount([{ status: 1 }]);
        let countryCount = await this.hospitalService.getCountCountry([{ status: 1 }]);
        let stateCount = await this.hospitalService.getCountState([{ status: 1 }]);
        let cityCount = await this.hospitalService.getCountCity([{ status: 1 }]);
        countList = {
            "clientCount": clientCount,
            "departmentCount": departmentCount,
            "moduleCount": moduleCount,
            "pageCount": pageCount,
            "countryCount": countryCount,
            "stateCount": stateCount,
            "cityCount": cityCount
        };
        response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: countList
        };
        return response;
    }
    async getClientcountry() {
        let response;
        let clientcountryData = await this.hospitalService.getClientCountry();
        response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: clientcountryData
        };
        return response;
    }
};
DashboardService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [hospitals_service_1.HospitalsService,
        departments_service_1.DepartmentsService,
        modules_service_1.ModulesService,
        pages_service_1.PagesService,
        countries_service_1.CountriesService,
        states_service_1.StatesService,
        cities_service_1.CitiesService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map