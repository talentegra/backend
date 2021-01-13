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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cities_entity_1 = require("./entity/cities.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let CitiesService = class CitiesService {
    constructor(citiesRepository) {
        this.citiesRepository = citiesRepository;
    }
    async findAll() {
        let citiesResult = await this.citiesRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: citiesResult
        };
        return response;
    }
    async findByName(cityName) {
        let citiesResult = await this.citiesRepository.findOne({ cityName: cityName });
        let response;
        if (citiesResult) {
            response = {
                data: citiesResult,
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
    async findById(id) {
        let citiesResult = await this.citiesRepository.findOne(id);
        let response;
        if (citiesResult) {
            response = {
                data: citiesResult,
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
    async findByStateId(stateId) {
        let citiesResult = await this.citiesRepository.find({ stateId: stateId });
        let response;
        if (citiesResult) {
            response = {
                data: citiesResult,
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
    async delete(id) {
        let deleteResponse = await this.citiesRepository.delete({ cityId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createCitiesDto) {
        let cities = new cities_entity_1.Cities();
        let isCitiesExists = await this.citiesRepository.findOne({ cityName: createCitiesDto.cityName });
        if (isCitiesExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createCitiesDto.cityName} Cities is already exists`
                }
            };
            return updatedResponse;
        }
        cities.cityName = createCitiesDto.cityName;
        cities.status = createCitiesDto.status;
        cities.stateId = createCitiesDto.stateId;
        cities.latitude = createCitiesDto.latitude;
        cities.longitude = createCitiesDto.longitude;
        let savedCities = await this.citiesRepository.save(cities);
        let citiesResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedCities
        };
        return citiesResponse;
    }
    async update(updateCitiesDto) {
        let toUpdate = await this.citiesRepository.findOne(updateCitiesDto.cityId);
        let updatedData = Object.assign({}, toUpdate, updateCitiesDto);
        updatedData.cityName = updateCitiesDto.cityName;
        updatedData.status = updateCitiesDto.status;
        updatedData.stateId = updateCitiesDto.stateId;
        updatedData.latitude = updateCitiesDto.latitude;
        updatedData.longitude = updateCitiesDto.longitude;
        updatedData = await this.citiesRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.citiesRepository.count({ where: [...conditions] });
        return count;
    }
};
CitiesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cities_entity_1.Cities)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CitiesService);
exports.CitiesService = CitiesService;
//# sourceMappingURL=cities.service.js.map