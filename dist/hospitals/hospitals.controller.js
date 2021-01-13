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
const hospital_dto_1 = require("./dto/hospital.dto");
const hospitals_service_1 = require("./hospitals.service");
let HospitalsController = class HospitalsController {
    constructor(hospitalsService) {
        this.hospitalsService = hospitalsService;
    }
    create(createHospitalsDto) {
        return this.hospitalsService.create(createHospitalsDto);
    }
    findOne(id) {
        return this.hospitalsService.findById(id);
    }
    update(updateHospitalsDto) {
        return this.hospitalsService.update(updateHospitalsDto);
    }
    delete(id) {
        return this.hospitalsService.delete(id);
    }
    findAll() {
        return this.hospitalsService.findAll();
    }
    upload(uploadFilesDto) {
        return this.hospitalsService.upload(uploadFilesDto);
    }
    createDBid(id) {
        return this.hospitalsService.createDBId(id);
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.CreateHospitalsDto]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.UpdateHospitalsDto]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "findAll", null);
__decorate([
    common_1.Post("upload"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.UploadFilesDto]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "upload", null);
__decorate([
    common_1.Post("createDBid/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalsController.prototype, "createDBid", null);
HospitalsController = __decorate([
    common_1.Controller('hospitals'),
    __metadata("design:paramtypes", [hospitals_service_1.HospitalsService])
], HospitalsController);
exports.HospitalsController = HospitalsController;
//# sourceMappingURL=hospitals.controller.js.map