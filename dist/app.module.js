"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nestjs_oauth2_server_1 = require("@switchit/nestjs-oauth2-server");
const user_loader_1 = require("./oauth/user-loader");
const user_validator_1 = require("./oauth/user-validator");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const modules_module_1 = require("./modules/modules.module");
const pages_module_1 = require("./pages/pages.module");
const departments_module_1 = require("./departments/departments.module");
const hospitals_module_1 = require("./hospitals/hospitals.module");
const license_histroy_module_1 = require("./license-histroy/license-histroy.module");
const countries_module_1 = require("./countries/countries.module");
const states_module_1 = require("./states/states.module");
const cities_module_1 = require("./cities/cities.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const mailer_module_1 = require("./mailer/mailer.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const database_module_1 = require("./database/database.module");
const dmenu_module_1 = require("./dmenu/dmenu.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            user_module_1.UserModule, typeorm_1.TypeOrmModule.forRoot(), nestjs_oauth2_server_1.Oauth2Module.forRootAsync({
                useFactory: () => ({
                    userLoader: new user_loader_1.UserLoader(),
                    userValidator: new user_validator_1.UserValidator(),
                })
            }), modules_module_1.ModulesModule, pages_module_1.PagesModule, departments_module_1.DepartmentsModule, dmenu_module_1.DmenuModule, hospitals_module_1.HospitalsModule, license_histroy_module_1.LicenseHistroyModule, countries_module_1.CountriesModule, states_module_1.StatesModule, cities_module_1.CitiesModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'public/asset'),
                serveStaticOptions: {
                    index: false,
                },
            }),
            mailer_module_1.MailerModule, dashboard_module_1.DashboardModule, database_module_1.DatabaseModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map