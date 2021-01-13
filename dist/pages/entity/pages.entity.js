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
const modules_entity_1 = require("src/modules/entity/modules.entity");
let Pages = class Pages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "pages_id"
    }),
    __metadata("design:type", String)
], Pages.prototype, "pagesId", void 0);
__decorate([
    typeorm_1.Column({
        name: "pages_name",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Pages.prototype, "pagesName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Pages.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Pages.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Pages.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_version"
    }),
    __metadata("design:type", Number)
], Pages.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => modules_entity_1.Modules),
    typeorm_1.JoinColumn({ name: "modules_id" }),
    __metadata("design:type", modules_entity_1.Modules)
], Pages.prototype, "modules", void 0);
__decorate([
    typeorm_1.Column({
        name: "modeles_id"
    }),
    __metadata("design:type", String)
], Pages.prototype, "modulesId", void 0);
Pages = __decorate([
    typeorm_1.Entity({ name: "pages" })
], Pages);
exports.Pages = Pages;
//# sourceMappingURL=pages.entity.js.map