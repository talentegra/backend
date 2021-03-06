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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLicenseHistroyDto = exports.CreateLicenseHistroyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateLicenseHistroyDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateLicenseHistroyDto.prototype, "hospitalId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateLicenseHistroyDto.prototype, "hospitalLimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateLicenseHistroyDto.prototype, "departmentEquipmentLimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateLicenseHistroyDto.prototype, "licenseValidity", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateLicenseHistroyDto.prototype, "moduleIds", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateLicenseHistroyDto.prototype, "licenseTypeId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateLicenseHistroyDto.prototype, "status", void 0);
exports.CreateLicenseHistroyDto = CreateLicenseHistroyDto;
class UpdateLicenseHistroyDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateLicenseHistroyDto.prototype, "hospitalId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateLicenseHistroyDto.prototype, "hospitalLimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], UpdateLicenseHistroyDto.prototype, "departmentEquipmentLimit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateLicenseHistroyDto.prototype, "licenseValidity", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], UpdateLicenseHistroyDto.prototype, "moduleIds", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateLicenseHistroyDto.prototype, "licenseTypeId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateLicenseHistroyDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateLicenseHistroyDto.prototype, "licenseHistroyId", void 0);
exports.UpdateLicenseHistroyDto = UpdateLicenseHistroyDto;
//# sourceMappingURL=license-histroy.dto.js.map