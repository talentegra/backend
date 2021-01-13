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
const typeorm_1 = require("typeorm");
let Countries = class Countries {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'bigint',
        unsigned: true,
        name: "country_id"
    }),
    __metadata("design:type", Number)
], Countries.prototype, "countryId", void 0);
__decorate([
    typeorm_1.Column({
        name: "country_name",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "countryName", void 0);
__decorate([
    typeorm_1.Column({
        name: "iso2",
        nullable: false
    }),
    __metadata("design:type", String)
], Countries.prototype, "iso2", void 0);
__decorate([
    typeorm_1.Column({
        name: "iso3",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "iso3", void 0);
__decorate([
    typeorm_1.Column({
        name: "country_code",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "countryCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "phone_code",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "phoneCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "currency",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column({
        name: "capital",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "capital", void 0);
__decorate([
    typeorm_1.Column({
        name: "native",
        nullable: true
    }),
    __metadata("design:type", String)
], Countries.prototype, "native", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Countries.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Countries.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Countries.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], Countries.prototype, "entityVersion", void 0);
Countries = __decorate([
    typeorm_1.Entity({ name: "countries" })
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=countries.entity.js.map