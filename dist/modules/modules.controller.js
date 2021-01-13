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
const modules_dto_1 = require("./dto/modules.dto");
const modules_service_1 = require("./modules.service");
const passport_1 = require("@nestjs/passport");
let ModulesController = class ModulesController {
    constructor(modulesService) {
        this.modulesService = modulesService;
    }
    create(createmodulesDto) {
        return this.modulesService.create(createmodulesDto);
    }
    findOne(id) {
        return this.modulesService.findById(id);
    }
    update(updateModulesDto) {
        return this.modulesService.update(updateModulesDto);
    }
    delete(id) {
        return this.modulesService.delete(id);
    }
    findAll() {
        return this.modulesService.findAll();
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [modules_dto_1.CreateModulesDto]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [modules_dto_1.UpdateModulesDto]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "findAll", null);
ModulesController = __decorate([
    common_1.Controller('modules'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [modules_service_1.ModulesService])
], ModulesController);
exports.ModulesController = ModulesController;
//# sourceMappingURL=modules.controller.js.map