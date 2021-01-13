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
const license_histroy_dto_1 = require("./dto/license-histroy.dto");
const license_histroy_service_1 = require("./license-histroy.service");
const passport_1 = require("@nestjs/passport");
let LicenseHistroyController = class LicenseHistroyController {
    constructor(licenseHistroysService) {
        this.licenseHistroysService = licenseHistroysService;
    }
    create(createLicenseHistroyDto) {
        return this.licenseHistroysService.create(createLicenseHistroyDto);
    }
    findOne(id) {
        return this.licenseHistroysService.findById(id);
    }
    update(updateLicenseHistroyDto) {
        return this.licenseHistroysService.update(updateLicenseHistroyDto);
    }
    delete(id) {
        return this.licenseHistroysService.delete(id);
    }
    findAll() {
        return this.licenseHistroysService.findAll();
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [license_histroy_dto_1.CreateLicenseHistroyDto]),
    __metadata("design:returntype", Promise)
], LicenseHistroyController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LicenseHistroyController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [license_histroy_dto_1.UpdateLicenseHistroyDto]),
    __metadata("design:returntype", Promise)
], LicenseHistroyController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LicenseHistroyController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LicenseHistroyController.prototype, "findAll", null);
LicenseHistroyController = __decorate([
    common_1.Controller('license-histroy'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [license_histroy_service_1.LicenseHistroyService])
], LicenseHistroyController);
exports.LicenseHistroyController = LicenseHistroyController;
//# sourceMappingURL=license-histroy.controller.js.map