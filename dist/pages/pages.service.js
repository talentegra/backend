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
const pages_entity_1 = require("./entity/pages.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let PagesService = class PagesService {
    constructor(pagesRepository) {
        this.pagesRepository = pagesRepository;
    }
    async findAll() {
        let pagesResult = await this.pagesRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: pagesResult
        };
        return response;
    }
    async findByName(pagesName) {
        let pagessResult = await this.pagesRepository.findOne({ pagesName: pagesName });
        let response;
        if (pagessResult) {
            response = {
                data: pagessResult,
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
        let pagessResult = await this.pagesRepository.findOne(id);
        let response;
        if (pagessResult) {
            response = {
                data: pagessResult,
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
        let deleteResponse = await this.pagesRepository.delete({ pagesId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createPagesDto) {
        let pages = new pages_entity_1.Pages();
        let isPagesExists = await this.pagesRepository.findOne({ pagesName: createPagesDto.pagesName });
        if (isPagesExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createPagesDto.pagesName} pages is already exists`
                }
            };
            return updatedResponse;
        }
        pages.modulesId = createPagesDto.modulesId;
        pages.pagesName = createPagesDto.pagesName;
        pages.status = createPagesDto.status;
        let savedPages = await this.pagesRepository.save(pages);
        let pagesResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedPages
        };
        return pagesResponse;
    }
    async update(updatePagesDto) {
        let toUpdate = await this.pagesRepository.findOne(updatePagesDto.pagesId);
        let updatedData = Object.assign({}, toUpdate, updatePagesDto);
        updatedData.status = updatePagesDto.status;
        updatedData.modulesId = updatePagesDto.modulesId;
        updatedData = await this.pagesRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.pagesRepository.count({ where: [...conditions] });
        return count;
    }
    async findId(id) {
        let pagessResult = await this.pagesRepository.findOne(id);
        let response;
        if (pagessResult) {
            response = {
                data: pagessResult,
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
    async findByModuleId(id) {
        let pagessResult = await this.pagesRepository.find({ modulesId: id });
        let response;
        if (pagessResult) {
            response = {
                data: pagessResult,
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
};
PagesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pages_entity_1.Pages)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map