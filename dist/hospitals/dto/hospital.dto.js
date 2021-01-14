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
exports.UpdateHospitalsDto = exports.CreateHospitalsDto = exports.UploadFilesDto = exports.FileDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
class FileDetails {
}
exports.FileDetails = FileDetails;
class UploadFilesDto extends FileDetails {
}
exports.UploadFilesDto = UploadFilesDto;
class CreateHospitalsDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "hospitalsName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "countryId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "stateId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "areaCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "favicon", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "hospitalCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "govtRegNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "alertType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smtpHost", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smtpUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smtpPassword", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "smtpPort", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smsGatewayUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smsGatewayApiKey", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smsGatewaySenderId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "smsGatewayUrl", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "hostingType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "macAddress", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "dbHostName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "dbName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "dbUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "dbPassword", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "tablePrefix", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "licenseHistoryId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateHospitalsDto.prototype, "dbCreated", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateHospitalsDto.prototype, "hospitalType", void 0);
exports.CreateHospitalsDto = CreateHospitalsDto;
class UpdateHospitalsDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "hospitalsId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "hospitalsName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "countryId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "stateId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "areaCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "favicon", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "hospitalCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "govRegNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "alertType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smtpHost", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smtpUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smtpPassword", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "smtpPort", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smsGatewayUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smsGatewayApiKey", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smsGatewaySenderId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "smsGatewayUrl", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "hostingType", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "macAddress", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "dbHostName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "dbName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "dbUserName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "dbPassword", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "tablePrefix", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "licenseHistoryId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateHospitalsDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateHospitalsDto.prototype, "hospitalType", void 0);
exports.UpdateHospitalsDto = UpdateHospitalsDto;
//# sourceMappingURL=hospital.dto.js.map