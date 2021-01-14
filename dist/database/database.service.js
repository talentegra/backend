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
exports.DatabaseService = void 0;
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const common_2 = require("../shared/common");
const typeorm_1 = require("typeorm");
const fs = require("fs");
const config_1 = require("../config/config");
let DatabaseService = class DatabaseService {
    constructor() {
        this.readSqlFile = (filepath) => {
            return fs
                .readFileSync(filepath)
                .toString()
                .replace(/\r?\n|\r/g, '')
                .split(';')
                .filter((query) => query === null || query === void 0 ? void 0 : query.length);
        };
    }
    checkFileExistsSync(filepath) {
        let flag = true;
        try {
            fs.accessSync(filepath, fs.constants.F_OK);
        }
        catch (e) {
            flag = false;
        }
        return flag;
    }
    async insertAdminData() {
        let insertdataResponse;
        let admin_data_path = "database/admin_datas.sql";
        var fs = require('fs');
        let f_e = this.checkFileExistsSync(admin_data_path);
        if (f_e === false) {
            insertdataResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Admin default data file not avilable!"
                }
            };
            return insertdataResponse;
        }
        let connection = typeorm_1.getConnection("default");
        try {
            const data_queries = this.readSqlFile('database/admin_datas.sql');
            connection.manager.queryRunner;
            for (let i = 0; i < data_queries.length; i++) {
                await connection.manager.query(data_queries[i]);
            }
            connection.manager.connection.close();
            insertdataResponse = {
                status: common_2.ApiResponseStatus.SUCCESS
            };
            return insertdataResponse;
        }
        catch (error) {
            insertdataResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Error in inserting data!"
                }
            };
            return insertdataResponse;
        }
    }
};
DatabaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map