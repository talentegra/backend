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
const states_dto_1 = require("./dto/states.dto");
const states_service_1 = require("./states.service");
const passport_1 = require("@nestjs/passport");
let StatesController = class StatesController {
    constructor(statesService) {
        this.statesService = statesService;
    }
    create(createStatesDto) {
        return this.statesService.create(createStatesDto);
    }
    findOne(id) {
        return this.statesService.findById(id);
    }
    update(updateStatesDto) {
        return this.statesService.update(updateStatesDto);
    }
    delete(id) {
        return this.statesService.delete(id);
    }
    findAll() {
        return this.statesService.findAll();
    }
    findCountry(countryId) {
        return this.statesService.findByCountryId(countryId);
    }
};
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [states_dto_1.CreateStatesDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "create", null);
__decorate([
    common_1.Get("find/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findOne", null);
__decorate([
    common_1.Post("update"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [states_dto_1.UpdateStatesDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "update", null);
__decorate([
    common_1.Delete("delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "delete", null);
__decorate([
    common_1.Get("findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAll", null);
__decorate([
    common_1.Get("country/:countryId"),
    __param(0, common_1.Param("countryId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findCountry", null);
StatesController = __decorate([
    common_1.Controller('states'),
    common_1.UseGuards(passport_1.AuthGuard("access-token")),
    __metadata("design:paramtypes", [states_service_1.StatesService])
], StatesController);
exports.StatesController = StatesController;
//# sourceMappingURL=states.controller.js.map