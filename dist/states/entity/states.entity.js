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
exports.States = void 0;
const typeorm_1 = require("typeorm");
const countries_entity_1 = require("../../countries/entity/countries.entity");
let States = class States {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: "state_id"
    }),
    __metadata("design:type", Number)
], States.prototype, "stateId", void 0);
__decorate([
    typeorm_1.Column({
        name: "state_name",
        nullable: true,
        unique: true
    }),
    __metadata("design:type", String)
], States.prototype, "stateName", void 0);
__decorate([
    typeorm_1.Column({
        name: "iso2",
        nullable: false
    }),
    __metadata("design:type", String)
], States.prototype, "iso2", void 0);
__decorate([
    typeorm_1.Column({
        name: "fips_code",
        nullable: false
    }),
    __metadata("design:type", String)
], States.prototype, "fipsCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], States.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], States.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], States.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], States.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => countries_entity_1.Countries),
    typeorm_1.JoinColumn({ name: "country_id" }),
    __metadata("design:type", countries_entity_1.Countries)
], States.prototype, "countries", void 0);
__decorate([
    typeorm_1.Column({
        name: "country_id"
    }),
    __metadata("design:type", Number)
], States.prototype, "countryId", void 0);
States = __decorate([
    typeorm_1.Entity({ name: "states" })
], States);
exports.States = States;
//# sourceMappingURL=states.entity.js.map