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
exports.DmenuController = void 0;
const common_1 = require("@nestjs/common");
const dmenu_dto_1 = require("./dto/dmenu.dto");
const dmenu_service_1 = require("./dmenu.service");
const passport_1 = require("@nestjs/passport");
let DmenuController = class DmenuController {
    constructor(dmenuService) {
        this.dmenuService = dmenuService;
    }
    create(createdmenuDto) {
        return this.dmenuService.create(createdmenuDto);
    }
    findOne(id) {
        return this.dmenuService.findById(id);
    }
    update(updateDmenuDto) {
        return this.dmenuService.update(updateDmenuDto);
    }
    delete(id) {
        return this.dmenuService.delete(id);
    }
    findAll() {
        return this.dmenuService.findAll();
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dmenu_dto_1.CreateDmenuDto]),
    __metadata("design:returntype", Promise)
], DmenuController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DmenuController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dmenu_dto_1.UpdateDmenuDto]),
    __metadata("design:returntype", Promise)
], DmenuController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DmenuController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DmenuController.prototype, "findAll", null);
DmenuController = __decorate([
    common_1.Controller('dmenu'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [dmenu_service_1.DmenuService])
], DmenuController);
exports.DmenuController = DmenuController;
//# sourceMappingURL=dmenu.controller.js.map