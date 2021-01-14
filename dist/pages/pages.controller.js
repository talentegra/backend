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
exports.PagesController = void 0;
const common_1 = require("@nestjs/common");
const pages_dto_1 = require("./dto/pages.dto");
const pages_service_1 = require("./pages.service");
const passport_1 = require("@nestjs/passport");
let PagesController = class PagesController {
    constructor(pagesService) {
        this.pagesService = pagesService;
    }
    create(createpagesDto) {
        return this.pagesService.create(createpagesDto);
    }
    findOne(id) {
        return this.pagesService.findById(id);
    }
    update(updatePagesDto) {
        return this.pagesService.update(updatePagesDto);
    }
    delete(id) {
        return this.pagesService.delete(id);
    }
    findAll() {
        return this.pagesService.findAll();
    }
    findByModuleId(id) {
        return this.pagesService.findByModuleId(id);
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pages_dto_1.CreatePagesDto]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pages_dto_1.UpdatePagesDto]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "findAll", null);
__decorate([
    common_1.Get("findByModuleId/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagesController.prototype, "findByModuleId", null);
PagesController = __decorate([
    common_1.Controller('pages'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesController);
exports.PagesController = PagesController;
//# sourceMappingURL=pages.controller.js.map