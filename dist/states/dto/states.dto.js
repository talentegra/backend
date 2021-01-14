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
exports.UpdateStatesDto = exports.CreateStatesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateStatesDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateStatesDto.prototype, "stateName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateStatesDto.prototype, "iso2", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateStatesDto.prototype, "fipsCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateStatesDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateStatesDto.prototype, "countryId", void 0);
exports.CreateStatesDto = CreateStatesDto;
class UpdateStatesDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateStatesDto.prototype, "stateId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateStatesDto.prototype, "stateName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateStatesDto.prototype, "iso2", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateStatesDto.prototype, "fipsCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateStatesDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateStatesDto.prototype, "countryId", void 0);
exports.UpdateStatesDto = UpdateStatesDto;
//# sourceMappingURL=states.dto.js.map