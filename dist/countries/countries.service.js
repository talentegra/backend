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
const countries_entity_1 = require("./entity/countries.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let CountriesService = class CountriesService {
    constructor(countriesRepository) {
        this.countriesRepository = countriesRepository;
    }
    async findAll() {
        let countriesResult = await this.countriesRepository.find();
        let countriesList = [];
        if (countriesResult.length) {
            for (let i = 0; i < countriesResult.length; i++) {
                let countriesInfo = __rest(countriesResult[i], []);
                let countryDto = countriesInfo;
                countriesList.push(countryDto);
            }
        }
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: countriesList
        };
        return response;
    }
    async create(createCountriesDto) {
        let countries = new countries_entity_1.Countries();
        let countriesResponse;
        countries.countryName = createCountriesDto.countryName;
        if (countries.countryName === "") {
            countriesResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Country name is empty!"
                }
            };
        }
        else {
            let countriesResult = await this.countriesRepository.find();
            countries.countryId = countriesResult.length + 10;
            console.log(countriesResult.length + 10);
            countries.iso2 = createCountriesDto.iso2;
            countries.iso3 = createCountriesDto.iso3;
            countries.countryCode = createCountriesDto.countryCode;
            countries.phoneCode = createCountriesDto.phoneCode;
            countries.capital = createCountriesDto.capital;
            countries.native = createCountriesDto.native;
            countries.status = createCountriesDto.status;
            countries.currency = createCountriesDto.currency;
            countries.status = createCountriesDto.status;
            let savedCountries = await this.countriesRepository.save(countries);
            if (savedCountries) {
                countriesResponse = {
                    status: common_2.ApiResponseStatus.SUCCESS,
                    data: savedCountries
                };
            }
            else {
                countriesResponse = {
                    status: common_2.ApiResponseStatus.ERROR,
                    error: {
                        type: common_2.ErrorMessageType.ERROR,
                        message: "Query Error"
                    }
                };
            }
        }
        return countriesResponse;
    }
    async update(updateCountiresDto) {
        let toUpdate = await this.countriesRepository.findOne(updateCountiresDto.countryId);
        let updatedData = Object.assign({}, toUpdate, updateCountiresDto);
        updatedData.countryName = updateCountiresDto.countryName;
        updatedData.status = updateCountiresDto.status;
        updatedData.iso2 = updateCountiresDto.iso2;
        updatedData.iso3 = updateCountiresDto.iso3;
        updatedData.countryCode = updateCountiresDto.countryCode;
        updatedData.phoneCode = updateCountiresDto.phoneCode;
        updatedData.currency = updateCountiresDto.currency;
        updatedData.capital = updateCountiresDto.capital;
        updatedData.native = updateCountiresDto.native;
        updatedData = await this.countriesRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }
    async delete(id) {
        let deleteResponse = await this.countriesRepository.delete({ countryId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async findById(id) {
        let countriesResult = await this.countriesRepository.findOne(id);
        let response;
        if (countriesResult) {
            response = {
                data: countriesResult,
                status: common_2.ApiResponseStatus.SUCCESS
            };
        }
        else {
            response = {
                status: common_2.ApiResponseStatus.ERROR
            };
        }
        return response;
    }
    async findByName(countryName) {
        let countriesResult = await this.countriesRepository.findOne({ countryName: countryName });
        let response;
        if (countriesResult) {
            response = {
                data: countriesResult,
                status: common_2.ApiResponseStatus.SUCCESS
            };
        }
        else {
            response = {
                status: common_2.ApiResponseStatus.ERROR
            };
        }
        return response;
    }
    async getCount(conditions) {
        let count = await this.countriesRepository.count({ where: [...conditions] });
        return count;
    }
};
CountriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(countries_entity_1.Countries)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map