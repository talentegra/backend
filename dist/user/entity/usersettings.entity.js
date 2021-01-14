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
exports.UserSettings = void 0;
const typeorm_1 = require("typeorm");
const settings_enum_1 = require("../dto/settings.enum");
let UserSettings = class UserSettings {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "setting_id"
    }),
    __metadata("design:type", String)
], UserSettings.prototype, "settingId", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: settings_enum_1.ThemeStyle,
        default: settings_enum_1.ThemeStyle.THEME_TYPE_SEMI_DARK
    }),
    __metadata("design:type", String)
], UserSettings.prototype, "themeStyle", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: settings_enum_1.NavStyle,
        default: settings_enum_1.NavStyle.NAV_STYLE_FIXED
    }),
    __metadata("design:type", String)
], UserSettings.prototype, "navStyle", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: settings_enum_1.Layout,
        default: settings_enum_1.Layout.LAYOUT_TYPE_FULL
    }),
    __metadata("design:type", String)
], UserSettings.prototype, "layout", void 0);
UserSettings = __decorate([
    typeorm_1.Entity({ name: "usersettings" })
], UserSettings);
exports.UserSettings = UserSettings;
//# sourceMappingURL=usersettings.entity.js.map