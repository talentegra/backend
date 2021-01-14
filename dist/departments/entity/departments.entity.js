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
exports.Departments = void 0;
const typeorm_1 = require("typeorm");
let Departments = class Departments {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "department_id"
    }),
    __metadata("design:type", String)
], Departments.prototype, "departmentId", void 0);
__decorate([
    typeorm_1.Column({
        name: "department_name",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Departments.prototype, "departmentName", void 0);
__decorate([
    typeorm_1.Column({
        name: "no_equipment",
        nullable: false
    }),
    __metadata("design:type", Number)
], Departments.prototype, "noEquipment", void 0);
__decorate([
    typeorm_1.Column({
        name: "lab",
        nullable: false
    }),
    __metadata("design:type", String)
], Departments.prototype, "lab", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Departments.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Departments.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Departments.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], Departments.prototype, "entityVersion", void 0);
Departments = __decorate([
    typeorm_1.Entity({ name: "departments" })
], Departments);
exports.Departments = Departments;
//# sourceMappingURL=departments.entity.js.map