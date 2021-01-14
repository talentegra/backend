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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const departments_entity_1 = require("./entity/departments.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let DepartmentsService = class DepartmentsService {
    constructor(departmentsRepository) {
        this.departmentsRepository = departmentsRepository;
    }
    async findAll() {
        let departmentsResult = await this.departmentsRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: departmentsResult
        };
        return response;
    }
    async findByName(departmentName) {
        let departmentsResult = await this.departmentsRepository.findOne({ departmentName: departmentName });
        let response;
        if (departmentsResult) {
            response = {
                data: departmentsResult,
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
        let departmentsResult = await this.departmentsRepository.findOne(id);
        let response;
        if (departmentsResult) {
            response = {
                data: departmentsResult,
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
        let deleteResponse = await this.departmentsRepository.delete({ departmentId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createDepartmentsDto) {
        let departments = new departments_entity_1.Departments();
        let isDeptExists = await this.departmentsRepository.findOne({ departmentName: createDepartmentsDto.departmentName });
        if (isDeptExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createDepartmentsDto.departmentName} department is already exists`
                }
            };
            return updatedResponse;
        }
        departments.departmentName = createDepartmentsDto.departmentName;
        departments.lab = createDepartmentsDto.lab;
        departments.noEquipment = createDepartmentsDto.noEquipment;
        departments.status = createDepartmentsDto.status;
        let savedDepartments = await this.departmentsRepository.save(departments);
        let departmentsResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedDepartments
        };
        return departmentsResponse;
    }
    async update(updateDepartmentsDto) {
        let toUpdate = await this.departmentsRepository.findOne(updateDepartmentsDto.departmentId);
        let updatedData = Object.assign(Object.assign({}, toUpdate), updateDepartmentsDto);
        updatedData.status = updateDepartmentsDto.status;
        updatedData.departmentName = updateDepartmentsDto.departmentName;
        updatedData.noEquipment = updateDepartmentsDto.noEquipment;
        updatedData = await this.departmentsRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.departmentsRepository.count({ where: [...conditions] });
        return count;
    }
};
DepartmentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(departments_entity_1.Departments)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map