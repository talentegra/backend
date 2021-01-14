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
exports.DmenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dmenu_entity_1 = require("./entity/dmenu.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
let DmenuService = class DmenuService {
    constructor(dmenuRepository) {
        this.dmenuRepository = dmenuRepository;
    }
    async findAll() {
        let dmenuResult = await this.dmenuRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: dmenuResult
        };
        return response;
    }
    async findByName(dmenuName) {
        let dmenusResult = await this.dmenuRepository.findOne({ dmenuName: dmenuName });
        let response;
        if (dmenusResult) {
            response = {
                data: dmenusResult,
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
        let dmenusResult = await this.dmenuRepository.findOne(id);
        let response;
        if (dmenusResult) {
            response = {
                data: dmenusResult,
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
        let deleteResponse = await this.dmenuRepository.delete({ dmenuId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createDmenuDto) {
        let dmenu = new dmenu_entity_1.Dmenu();
        let isDmenuExists = await this.dmenuRepository.findOne({ dmenuName: createDmenuDto.dmenuName });
        if (isDmenuExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createDmenuDto.dmenuName} Dashboard Menus is already exists`
                }
            };
            return updatedResponse;
        }
        dmenu.modulesId = createDmenuDto.modulesId;
        dmenu.dmenuName = createDmenuDto.dmenuName;
        dmenu.status = createDmenuDto.status;
        let savedDmenu = await this.dmenuRepository.save(dmenu);
        let dmenuResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedDmenu
        };
        return dmenuResponse;
    }
    async update(updateDmenuDto) {
        let toUpdate = await this.dmenuRepository.findOne(updateDmenuDto.dmenuId);
        let updatedData = Object.assign(Object.assign({}, toUpdate), updateDmenuDto);
        updatedData.status = updateDmenuDto.status;
        updatedData.modulesId = updateDmenuDto.modulesId;
        updatedData = await this.dmenuRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }
    async getCount(conditions) {
        let count = await this.dmenuRepository.count({ where: [...conditions] });
        return count;
    }
    async findId(id) {
        let dmenusResult = await this.dmenuRepository.findOne(id);
        let response;
        if (dmenusResult) {
            response = {
                data: dmenusResult,
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
DmenuService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dmenu_entity_1.Dmenu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DmenuService);
exports.DmenuService = DmenuService;
//# sourceMappingURL=dmenu.service.js.map