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
exports.UpdateCountriesDto = exports.CreateCountriesDto = exports.CountriesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CountriesDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty({ message: "Country name is not empty" }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "countryName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "iso2", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "iso3", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "countryCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "phoneCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "currency", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "capital", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CountriesDto.prototype, "native", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CountriesDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CountriesDto.prototype, "countryId", void 0);
exports.CountriesDto = CountriesDto;
class CreateCountriesDto extends CountriesDto {
}
exports.CreateCountriesDto = CreateCountriesDto;
class UpdateCountriesDto extends CountriesDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateCountriesDto.prototype, "countryId", void 0);
exports.UpdateCountriesDto = UpdateCountriesDto;
//# sourceMappingURL=countries.dto.js.map