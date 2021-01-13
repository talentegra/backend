"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dmenu_controller_1 = require("./dmenu.controller");
const dmenu_service_1 = require("./dmenu.service");
const typeorm_1 = require("@nestjs/typeorm");
const dmenu_entity_1 = require("./entity/dmenu.entity");
let DmenuModule = class DmenuModule {
};
DmenuModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dmenu_entity_1.Dmenu])],
        controllers: [dmenu_controller_1.DmenuController],
        providers: [dmenu_service_1.DmenuService],
        exports: [dmenu_service_1.DmenuService]
    })
], DmenuModule);
exports.DmenuModule = DmenuModule;
//# sourceMappingURL=dmenu.module.js.map