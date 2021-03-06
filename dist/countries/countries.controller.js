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
exports.CountriesController = void 0;
const common_1 = require("@nestjs/common");
const countries_dto_1 = require("./dto/countries.dto");
const countries_service_1 = require("./countries.service");
const passport_1 = require("@nestjs/passport");
let CountriesController = class CountriesController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    findAll() {
        return this.countriesService.findAll();
    }
    create(createCountriesDto) {
        return this.countriesService.create(createCountriesDto);
    }
    update(updateCountriesDto) {
        return this.countriesService.update(updateCountriesDto);
    }
    delete(id) {
        return this.countriesService.delete(id);
    }
    findOne(id) {
        return this.countriesService.findById(id);
    }
};
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "findAll", null);
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [countries_dto_1.CreateCountriesDto]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "create", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [countries_dto_1.UpdateCountriesDto]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "delete", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "findOne", null);
CountriesController = __decorate([
    common_1.Controller('countries'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [countries_service_1.CountriesService])
], CountriesController);
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.controller.js.map