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
exports.LicenseHistroy = void 0;
const typeorm_1 = require("typeorm");
const hospitals_entity_1 = require("../../hospitals/entity/hospitals.entity");
const modules_entity_1 = require("../../modules/entity/modules.entity");
const departments_entity_1 = require("../../departments/entity/departments.entity");
let LicenseHistroy = class LicenseHistroy {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "license_history_id"
    }),
    __metadata("design:type", String)
], LicenseHistroy.prototype, "licenseHistroyId", void 0);
__decorate([
    typeorm_1.Column({
        name: "hospital_limit",
        nullable: false
    }),
    __metadata("design:type", Number)
], LicenseHistroy.prototype, "hospitalLimit", void 0);
__decorate([
    typeorm_1.Column({
        type: "simple-array",
        name: "module_ids",
        nullable: false
    }),
    __metadata("design:type", Array)
], LicenseHistroy.prototype, "moduleIds", void 0);
__decorate([
    typeorm_1.Column({
        type: 'jsonb',
        name: "department_equipment_limit",
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], LicenseHistroy.prototype, "departmentEquipmentLimit", void 0);
__decorate([
    typeorm_1.Column({
        name: "license_validity",
        nullable: false
    }),
    __metadata("design:type", Number)
], LicenseHistroy.prototype, "licenseValidity", void 0);
__decorate([
    typeorm_1.Column({
        name: "license_from",
        nullable: false
    }),
    __metadata("design:type", Date)
], LicenseHistroy.prototype, "licenseFrom", void 0);
__decorate([
    typeorm_1.Column({
        name: "license_to",
        nullable: false
    }),
    __metadata("design:type", Date)
], LicenseHistroy.prototype, "licenseTo", void 0);
__decorate([
    typeorm_1.Column({
        name: "license_type_id",
        nullable: false
    }),
    __metadata("design:type", Number)
], LicenseHistroy.prototype, "licenseTypeId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LicenseHistroy.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], LicenseHistroy.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], LicenseHistroy.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], LicenseHistroy.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => hospitals_entity_1.Hospitals),
    typeorm_1.JoinColumn({ name: "hospital_id" }),
    __metadata("design:type", hospitals_entity_1.Hospitals)
], LicenseHistroy.prototype, "hospitals", void 0);
__decorate([
    typeorm_1.Column({
        name: "hospital_id",
    }),
    __metadata("design:type", String)
], LicenseHistroy.prototype, "hospitalId", void 0);
LicenseHistroy = __decorate([
    typeorm_1.Entity({ name: "license-histroy" })
], LicenseHistroy);
exports.LicenseHistroy = LicenseHistroy;
//# sourceMappingURL=licence-histroy.entity.js.map