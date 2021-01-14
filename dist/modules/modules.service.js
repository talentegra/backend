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
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modules_entity_1 = require("./entity/modules.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let ModulesService = class ModulesService {
    constructor(modulesRepository) {
        this.modulesRepository = modulesRepository;
    }
    async findAll() {
        let modulesResult = await this.modulesRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: modulesResult
        };
        return response;
    }
    async findByName(modulesName) {
        let modulesResult = await this.modulesRepository.findOne({ modulesName: modulesName });
        let response;
        if (modulesResult) {
            response = {
                data: modulesResult,
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
        let modulesResult = await this.modulesRepository.findOne(id);
        let response;
        if (modulesResult) {
            response = {
                data: modulesResult,
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
        let deleteResponse = await this.modulesRepository.delete({ modulesId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createModulesDto) {
        let modules = new modules_entity_1.Modules();
        let isModulesExists = await this.modulesRepository.findOne({ modulesName: createModulesDto.modulesName });
        if (isModulesExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createModulesDto.modulesName} Modules is already exists`
                }
            };
            return updatedResponse;
        }
        modules.modulesName = createModulesDto.modulesName;
        modules.status = createModulesDto.status;
        let savedModules = await this.modulesRepository.save(modules);
        let modulesResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedModules
        };
        return modulesResponse;
    }
    async update(updateModulesDto) {
        let toUpdate = await this.modulesRepository.findOne(updateModulesDto.modelesId);
        let updatedData = Object.assign(Object.assign({}, toUpdate), updateModulesDto);
        updatedData.status = updateModulesDto.status;
        updatedData = await this.modulesRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.modulesRepository.count({ where: [...conditions] });
        return count;
    }
};
ModulesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(modules_entity_1.Modules)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModulesService);
exports.ModulesService = ModulesService;
//# sourceMappingURL=modules.service.js.map