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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const usersettings_entity_1 = require("./usersettings.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "user_id"
    }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        name: "first_name",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({
        name: "middle_name",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({
        name: "last_name",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({
        name: "login_username",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column({
        name: "login_password",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        name: "email_id",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        name: "phone",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn(),
    __metadata("design:type", Object)
], User.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.Column({
        name: "activation_key",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "activationKey", void 0);
__decorate([
    typeorm_1.Column({
        name: "forgot_password_key",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "forgotPasswordKey", void 0);
__decorate([
    typeorm_1.Column({
        name: "forgot_password_creation_time",
        nullable: true
    }),
    __metadata("design:type", Date)
], User.prototype, "forgotPasswordCreationTime", void 0);
__decorate([
    typeorm_1.Column({
        name: "profile_img_name",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "imageName", void 0);
__decorate([
    typeorm_1.OneToOne(type => usersettings_entity_1.UserSettings),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Promise)
], User.prototype, "settings", void 0);
User = __decorate([
    typeorm_1.Entity({ name: "users" })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map