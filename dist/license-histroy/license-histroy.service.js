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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const licence_histroy_entity_1 = require("./entity/licence-histroy.entity");
const hospitals_service_1 = require("../hospitals/hospitals.service");
const departments_service_1 = require("../departments/departments.service");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
const typeorm_3 = require("typeorm");
const encrypt_decrypt_service_1 = require("src/common/encrypt.decrypt.service");
const config_1 = require("src/config/config");
const pages_service_1 = require("src/pages/pages.service");
const moment = require("moment");
let LicenseHistroyService = class LicenseHistroyService {
    constructor(licenseHistroyRepository, hospitalsService, departmentService, pageservice) {
        this.licenseHistroyRepository = licenseHistroyRepository;
        this.hospitalsService = hospitalsService;
        this.departmentService = departmentService;
        this.pageservice = pageservice;
    }
    async findAll() {
        let hospitalResponse = await this.hospitalsService.findAll();
        let hospitalResult = hospitalResponse.data;
        let licenseHistroyResult = await this.licenseHistroyRepository.find();
        for (var i = 0; i < licenseHistroyResult.length; i++) {
            for (var j = 0; j < hospitalResult.length; j++) {
                if (hospitalResult[j]['hospitalsId'] === licenseHistroyResult[i]['hospitalId']) {
                    let hospitalName = hospitalResult[j]['hospitalsName'];
                    licenseHistroyResult[i]["hospitalName"] = hospitalName;
                }
            }
        }
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: licenseHistroyResult
        };
        return response;
    }
    async findById(id) {
        let licenseHistroyResult = await this.licenseHistroyRepository.findOne(id);
        let response;
        if (licenseHistroyResult) {
            response = {
                data: licenseHistroyResult,
                status: common_2.ApiResponseStatus.SUCCESS
            };
        }
        else {
            response = {
                status: common_2.ApiResponseStatus.ERROR
            };
        }
        return response;
    }
    async delete(id) {
        let deleteResponse = await this.licenseHistroyRepository.delete({ licenseHistroyId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createLicenseHistroyDto) {
        let licenseHistroy = new licence_histroy_entity_1.LicenseHistroy();
        let licenseHistroyResponse;
        licenseHistroy.hospitalId = createLicenseHistroyDto.hospitalId;
        let hospitalDetailsResponse = await this.hospitalsService.findById(licenseHistroy.hospitalId);
        let hospitalDetailsResponseStatus = hospitalDetailsResponse.status;
        if (hospitalDetailsResponseStatus === "Ok") {
            let hospitalDetailsResponseData = hospitalDetailsResponse.data;
            let currentDate = moment();
            if (hospitalDetailsResponseData.dbCreated != 0) {
                let result = await typeorm_3.createConnection({
                    "name": "secondary",
                    "type": "postgres",
                    "host": "localhost",
                    "port": 5432,
                    "username": "postgres",
                    "password": "Pass@143",
                    "database": "bluejay",
                    "entities": ["dist/**/entity/*.entity.js", "node_modules/@switchit/**/*.entity.js"],
                    "schema": hospitalDetailsResponseData.dbName,
                    "entityPrefix": hospitalDetailsResponseData.tablePrefix + "_"
                }).then(async (connection) => {
                    console.log("Adding lic File");
                    connection.manager.queryRunner;
                    let hospitalLimit = createLicenseHistroyDto.hospitalLimit;
                    let modulesID = createLicenseHistroyDto.moduleIds;
                    let deptELimit = createLicenseHistroyDto.departmentEquipmentLimit;
                    let hospitalType = hospitalDetailsResponseData.hospitalType;
                    let pageNames = [];
                    var i;
                    var k = 0;
                    for (i = 0; i < modulesID.length; i++) {
                        let pagesResponse = await this.pageservice.findByModuleId(modulesID[i]);
                        let pageResults = await pagesResponse.data;
                        var j;
                        console.log(modulesID[i]);
                        for (j = 0; j < pageResults.length; j++) {
                            pageNames[k] = pageResults[j].pagesName;
                            console.log("........" + pageResults[j].pagesName);
                            k = k + 1;
                        }
                    }
                    let deptELimit1 = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(deptELimit.toString()));
                    let licTo = currentDate.add(licenseHistroy.licenseValidity, 'M').toDate();
                    var year = licTo.getFullYear();
                    var month = (1 + licTo.getMonth()).toString();
                    month = month.length > 1 ? month : '0' + month;
                    var day = licTo.getDate().toString();
                    day = day.length > 1 ? day : '0' + day;
                    let licDate1 = (year + '-' + month + '-' + day);
                    let sql = "delete from " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_licsettings";
                    await connection.manager.query(sql);
                    sql = "insert into " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_licsettings  ( hospital_limit,module_ids,department_equipment_limit,license_to,hospital_type) values (" + hospitalLimit + ",'" + pageNames.toString() + "','" + deptELimit1.toString() + "','" + licDate1.toString() + "','" + hospitalType.toString() + "')";
                    await connection.manager.query(sql);
                    console.log("Licence added in clients database");
                    sql = "select COUNT(*)  from " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_hospitals";
                    let result = await connection.manager.query(sql);
                    console.log(result[0].count);
                    if (result[0].count == 0) {
                        let gender = 1;
                        sql = "insert into " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_hospitals  (";
                        sql = sql + "hospital_id, hospital_name,email,country_id, state_id,city_id,status ";
                        sql = sql + ") values ('" + hospitalDetailsResponseData.hospitalsId + "','" + hospitalDetailsResponseData.hospitalsName + "','" + hospitalDetailsResponseData.email + "','";
                        sql = sql + hospitalDetailsResponseData.countryId + "','" + hospitalDetailsResponseData.stateId + "','" + hospitalDetailsResponseData.cityId + "'," + gender + ")";
                        result = await connection.manager.query(sql);
                        console.log("Hospital Added");
                        sql = "insert into " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_users  (";
                        sql = sql + "user_id, hospital_id,department_id,role_id,designation_id,country_id,state_id,city_id,first_name,last_name,gender,date_of_birth,email_id,phone_number,login_username,login_password,date_of_joining,activation_key,status";
                        sql = sql + ") values ( '" + "1669440d-779e-45b9-bb7f-4209b05f73f1" + "','" + hospitalDetailsResponseData.hospitalsId + "','";
                        let departmentResponse = await this.departmentService.findByName("IT");
                        let departmentResult = await departmentResponse.data;
                        sql = sql + departmentResult.departmentId + "','";
                        let sql_client = "select  role_id from " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_roles where role_name ='Administrator'";
                        let results = await connection.manager.query(sql_client);
                        sql = sql + results[0].role_id + "','";
                        sql_client = "select  designation_id from " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_designations where designation_name ='HR Manager'";
                        results = await connection.manager.query(sql_client);
                        sql = sql + results[0].designation_id + "','" + hospitalDetailsResponseData.countryId + "','" + hospitalDetailsResponseData.stateId + "','" + hospitalDetailsResponseData.cityId + "','";
                        let date_of_birth = licDate1;
                        sql = sql + "System" + "','" + "Admin" + "'," + gender + " ,'" + date_of_birth.toString() + "','" + hospitalDetailsResponseData.email + "','" + hospitalDetailsResponseData.phoneNumber + "','";
                        let decryptedUserName = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue("sysadmin"));
                        let activationKey = encrypt_decrypt_service_1.getEncryptedMD5Value(encrypt_decrypt_service_1.getEncryptedShaValue(config_1.CONFIG.EMAIL.VERIFIED_KEY));
                        sql = sql + decryptedUserName + "','" + decryptedUserName + "','" + date_of_birth.toString() + "','" + activationKey + "'," + gender + ")";
                        result = await connection.manager.query(sql);
                        console.log("Default User Added..");
                        sql = "insert into " + hospitalDetailsResponseData.dbName + "." + hospitalDetailsResponseData.tablePrefix + "_usersettings  (";
                        sql = sql + "setting_id, themestyle,navstyle,layout,user_id";
                        sql = sql + ") values ('" + "da4a4b80-5e7f-4963-8ae1-deec0c5132ab" + "','" + "THEME_TYPE_SEMI_DARK" + "','" + "NAV_STYLE_FIXED" + "','" + "LAYOUT_TYPE_FULL" + "','" + "1669440d-779e-45b9-bb7f-4209b05f73f1" + "')";
                        result = await connection.manager.query(sql);
                        console.log("User Setting Added");
                    }
                    connection.manager.connection.close();
                }, error => {
                    console.log("Error Inserting lic");
                    console.log(error);
                });
                licenseHistroy.hospitalLimit = createLicenseHistroyDto.hospitalLimit;
                licenseHistroy.licenseTypeId = createLicenseHistroyDto.licenseTypeId;
                licenseHistroy.licenseValidity = createLicenseHistroyDto.licenseValidity;
                licenseHistroy.licenseFrom = currentDate.toDate();
                licenseHistroy.licenseTo = currentDate.add(licenseHistroy.licenseValidity, 'M').toDate();
                licenseHistroy.moduleIds = createLicenseHistroyDto.moduleIds;
                licenseHistroy.departmentEquipmentLimit = createLicenseHistroyDto.departmentEquipmentLimit;
                licenseHistroy.status = createLicenseHistroyDto.status;
                let savedLicenseHistroy = await this.licenseHistroyRepository.save(licenseHistroy);
                let licenceID = savedLicenseHistroy.licenseHistroyId;
                hospitalDetailsResponseData.licenseHistoryId = licenceID;
                licenseHistroyResponse = {
                    status: common_2.ApiResponseStatus.SUCCESS,
                    data: savedLicenseHistroy
                };
            }
            else {
                licenseHistroyResponse = {
                    status: common_2.ApiResponseStatus.ERROR,
                    error: {
                        type: common_2.ErrorMessageType.ERROR,
                        message: "Database is not exists"
                    }
                };
                return licenseHistroyResponse;
            }
        }
        else {
            licenseHistroyResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Client ID is not exists"
                }
            };
        }
        return licenseHistroyResponse;
    }
    async update(updateLicenseHistroyDto) {
        let toUpdate = await this.licenseHistroyRepository.findOne(updateLicenseHistroyDto.licenseHistroyId);
        let updatedData = Object.assign({}, toUpdate, updateLicenseHistroyDto);
        updatedData.hospitalId = updateLicenseHistroyDto.hospitalId;
        updatedData.hospitalLimit = updateLicenseHistroyDto.hospitalLimit;
        updatedData.departmentEquipmentLimit = updateLicenseHistroyDto.departmentEquipmentLimit;
        updatedData.licenseValidity = updateLicenseHistroyDto.licenseValidity;
        updatedData.moduleIds = updateLicenseHistroyDto.moduleIds;
        updatedData.licenseTypeId = updateLicenseHistroyDto.licenseTypeId;
        updatedData.status = updateLicenseHistroyDto.status;
        updatedData = await this.licenseHistroyRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }
};
LicenseHistroyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(licence_histroy_entity_1.LicenseHistroy)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hospitals_service_1.HospitalsService, departments_service_1.DepartmentsService, pages_service_1.PagesService])
], LicenseHistroyService);
exports.LicenseHistroyService = LicenseHistroyService;
//# sourceMappingURL=license-histroy.service.js.map