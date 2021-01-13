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
const states_entity_1 = require("./entity/states.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let StatesService = class StatesService {
    constructor(statesRepository) {
        this.statesRepository = statesRepository;
    }
    async findAll() {
        let statesResult = await this.statesRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: statesResult
        };
        return response;
    }
    async findByName(stateName) {
        let statesResult = await this.statesRepository.findOne({ stateName: stateName });
        let response;
        if (statesResult) {
            response = {
                data: statesResult,
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
        let statesResult = await this.statesRepository.findOne(id);
        let response;
        if (statesResult) {
            response = {
                data: statesResult,
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
    async findByCountryId(countryId) {
        let statesResult = await this.statesRepository.find({ countryId: countryId });
        let response;
        if (statesResult) {
            response = {
                data: statesResult,
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
        let deleteResponse = await this.statesRepository.delete({ stateId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createStatesDto) {
        let states = new states_entity_1.States();
        let isStateExists = await this.statesRepository.findOne({ stateName: createStatesDto.stateName });
        if (isStateExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createStatesDto.stateName} state is already exists`
                }
            };
            return updatedResponse;
        }
        states.stateName = createStatesDto.stateName;
        states.status = createStatesDto.status;
        states.countryId = createStatesDto.countryId;
        states.iso2 = createStatesDto.iso2;
        states.fipsCode = createStatesDto.fipsCode;
        let savedModules = await this.statesRepository.save(states);
        let stateResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedModules
        };
        return stateResponse;
    }
    async update(updateStatesDto) {
        let toUpdate = await this.statesRepository.findOne(updateStatesDto.stateId);
        let updatedData = Object.assign({}, toUpdate, updateStatesDto);
        updatedData.status = updateStatesDto.status;
        updatedData.stateName = updateStatesDto.stateName;
        updatedData.countryId = updateStatesDto.countryId;
        updatedData.iso2 = updateStatesDto.iso2;
        updatedData.fipsCode = updateStatesDto.fipsCode;
        updatedData = await this.statesRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.statesRepository.count({ where: [...conditions] });
        return count;
    }
};
StatesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(states_entity_1.States)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatesService);
exports.StatesService = StatesService;
//# sourceMappingURL=states.service.js.map