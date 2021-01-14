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
exports.Cities = void 0;
const typeorm_1 = require("typeorm");
const states_entity_1 = require("../../states/entity/states.entity");
let Cities = class Cities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: "city_id"
    }),
    __metadata("design:type", Number)
], Cities.prototype, "cityId", void 0);
__decorate([
    typeorm_1.Column({
        name: "city_name",
        nullable: false
    }),
    __metadata("design:type", String)
], Cities.prototype, "cityName", void 0);
__decorate([
    typeorm_1.Column({
        name: "latitude",
        nullable: false
    }),
    __metadata("design:type", String)
], Cities.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column({
        name: "longitude",
        nullable: false
    }),
    __metadata("design:type", String)
], Cities.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Cities.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Cities.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Cities.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], Cities.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => states_entity_1.States),
    typeorm_1.JoinColumn({ name: "state_id" }),
    __metadata("design:type", states_entity_1.States)
], Cities.prototype, "states", void 0);
__decorate([
    typeorm_1.Column({
        name: "state_id"
    }),
    __metadata("design:type", Number)
], Cities.prototype, "stateId", void 0);
Cities = __decorate([
    typeorm_1.Entity({ name: "cities" })
], Cities);
exports.Cities = Cities;
//# sourceMappingURL=cities.entity.js.map