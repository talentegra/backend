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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalsService = void 0;
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const hospital_dto_1 = require("./dto/hospital.dto");
const typeorm_1 = require("@nestjs/typeorm");
const hospitals_entity_1 = require("./entity/hospitals.entity");
const typeorm_2 = require("typeorm");
const common_2 = require("../shared/common");
const fs = require("fs");
const uuid = require("uuid");
const mailer_service_1 = require("../mailer/mailer.service");
const config_1 = require("../config/config");
const mailer_dto_1 = require("../mailer/dto/mailer.dto");
const fileupload_1 = require("../config/fileupload");
var db_s;
var db_p;
let HospitalsService = class HospitalsService {
    constructor(hospitalsRepository, mailerService, httpService) {
        this.hospitalsRepository = hospitalsRepository;
        this.mailerService = mailerService;
        this.httpService = httpService;
        this.readSqlFile = (filepath) => {
            return fs
                .readFileSync(filepath)
                .toString()
                .replace(/\r?\n|\r/g, '')
                .split(';')
                .filter((query) => query === null || query === void 0 ? void 0 : query.length);
        };
    }
    async findAll() {
        let hospitalsResult = await this.hospitalsRepository.find();
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: hospitalsResult
        };
        return response;
    }
    async findByName(hospitalsName) {
        let hospitalsResult = await this.hospitalsRepository.findOne({ hospitalsName: hospitalsName });
        let response;
        if (hospitalsResult) {
            response = {
                data: hospitalsResult,
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
    async findById(id) {
        let hospitalsResult = await this.hospitalsRepository.findOne(id);
        let response;
        if (hospitalsResult) {
            response = {
                data: hospitalsResult,
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
        let deleteResponse = await this.hospitalsRepository.delete({ hospitalsId: id });
        let result = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: deleteResponse
        };
        return result;
    }
    async create(createHospitalsDto) {
        let hospitals = new hospitals_entity_1.Hospitals();
        let isHospitalNameExists = await this.hospitalsRepository.findOne({ hospitalsName: createHospitalsDto.hospitalsName });
        if (isHospitalNameExists) {
            let updatedResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: `The ${createHospitalsDto.hospitalsName} Hosptial is already exists`
                }
            };
            return updatedResponse;
        }
        hospitals.hospitalsName = createHospitalsDto.hospitalsName;
        hospitals.countryId = createHospitalsDto.countryId;
        hospitals.stateId = createHospitalsDto.stateId;
        hospitals.cityId = createHospitalsDto.cityId;
        hospitals.address = createHospitalsDto.address;
        hospitals.areaCode = createHospitalsDto.areaCode;
        hospitals.email = createHospitalsDto.email;
        hospitals.phoneNumber = createHospitalsDto.phoneNumber;
        hospitals.logo = createHospitalsDto.logo;
        hospitals.favIcon = createHospitalsDto.favicon;
        hospitals.hospitalCode = createHospitalsDto.hospitalCode;
        hospitals.govRegNumber = createHospitalsDto.govtRegNumber;
        hospitals.alertType = createHospitalsDto.alertType;
        hospitals.smtpHost = createHospitalsDto.smtpHost;
        hospitals.smtpUserName = createHospitalsDto.smtpUserName;
        hospitals.smtpPassword = createHospitalsDto.smtpPassword;
        hospitals.smtpPort = createHospitalsDto.smtpPort;
        hospitals.smsGatewayUserName = createHospitalsDto.smsGatewayUserName;
        hospitals.smsGatewayApiKey = createHospitalsDto.smsGatewayApiKey;
        hospitals.smsGatewaySenderId = createHospitalsDto.smsGatewaySenderId;
        hospitals.smsGatewayUrl = createHospitalsDto.smsGatewayUrl;
        hospitals.hostingType = createHospitalsDto.hostingType;
        hospitals.macAddress = createHospitalsDto.macAddress;
        hospitals.dbHostName = createHospitalsDto.dbHostName;
        hospitals.dbName = createHospitalsDto.dbName;
        hospitals.dbUserName = createHospitalsDto.dbUserName;
        hospitals.dbPassword = createHospitalsDto.dbPassword;
        hospitals.tablePrefix = createHospitalsDto.tablePrefix;
        hospitals.licenseHistoryId = createHospitalsDto.licenseHistoryId;
        hospitals.status = createHospitalsDto.status;
        hospitals.activationKey = uuid.v4();
        hospitals.dbCreated = 0;
        hospitals.hospitalType = createHospitalsDto.hospitalType;
        let savedHospitals = await this.hospitalsRepository.save(hospitals);
        const mailActivationKey = savedHospitals.activationKey;
        let EMAIL_CONFIG = config_1.CONFIG.EMAIL;
        const emailLink = EMAIL_CONFIG.FRONTEND_HOST + EMAIL_CONFIG.FRONTEND_EMAIL_VERIFY_LINK + "hospital/" + mailActivationKey + "/" + savedHospitals.hospitalsId;
        const mailcontent = {
            to: savedHospitals.email,
            subject: "Account Verification",
            templateName: "hospital.register.email.html"
        };
        let fullName = hospitals.hospitalsName + ",  ";
        var templateObj = {
            email: savedHospitals.email,
            link: emailLink,
            host: config_1.CONFIG.EMAIL.BACKEND_HOST,
            userName: fullName
        };
        this.mailerService.sendMail(mailcontent, templateObj);
        let hospitalsResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: savedHospitals
        };
        return hospitalsResponse;
    }
    async update(updateHosptialsDto) {
        let toUpdate = await this.hospitalsRepository.findOne(updateHosptialsDto.hospitalsId);
        let updatedData = Object.assign(Object.assign({}, toUpdate), updateHosptialsDto);
        updatedData.countryId = updateHosptialsDto.countryId;
        updatedData.stateId = updateHosptialsDto.stateId;
        updatedData.cityId = updateHosptialsDto.cityId;
        updatedData.address = updateHosptialsDto.address;
        updatedData.areaCode = updateHosptialsDto.areaCode;
        updatedData.email = updateHosptialsDto.email;
        updatedData.phoneNumber = updateHosptialsDto.phoneNumber;
        updatedData.logo = updateHosptialsDto.logo;
        updatedData.favIcon = updateHosptialsDto.favicon;
        updatedData.hospitalCode = updateHosptialsDto.hospitalCode;
        updatedData.govRegNumber = updateHosptialsDto.govRegNumber;
        updatedData.alertType = updateHosptialsDto.alertType;
        updatedData.smtpHost = updateHosptialsDto.smtpHost;
        updatedData.smtpUserName = updateHosptialsDto.smtpUserName;
        updatedData.smtpPassword = updateHosptialsDto.smtpPassword;
        updatedData.smtpPort = updateHosptialsDto.smtpPort;
        updatedData.smsGatewayUserName = updateHosptialsDto.smsGatewayUserName;
        updatedData.smsGatewayApiKey = updateHosptialsDto.smsGatewayApiKey;
        updatedData.smsGatewaySenderId = updateHosptialsDto.smsGatewaySenderId;
        updatedData.smsGatewayUrl = updateHosptialsDto.smsGatewayUrl;
        updatedData.hostingType = updateHosptialsDto.hostingType;
        updatedData.macAddress = updateHosptialsDto.macAddress;
        updatedData.dbHostName = updateHosptialsDto.dbHostName;
        updatedData.dbName = updateHosptialsDto.dbName;
        updatedData.dbUserName = updateHosptialsDto.dbUserName;
        updatedData.dbPassword = updateHosptialsDto.dbPassword;
        updatedData.tablePrefix = updateHosptialsDto.tablePrefix;
        updatedData.licenseHistoryId = updateHosptialsDto.licenseHistoryId;
        updatedData.status = updateHosptialsDto.status;
        updatedData.hospitalType = updateHosptialsDto.hospitalType;
        updatedData = await this.hospitalsRepository.save(updatedData);
        let updatedResponse = {
            status: common_2.ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
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
    async createDBId(id) {
        let hospitalsResult = await this.hospitalsRepository.findOne(id);
        let createdbResponse;
        let client_table_path = "client_db/client_tables.sql";
        let client_data_path = "client_db/client_datas.sql";
        var fs = require('fs');
        let f_e = this.checkFileExistsSync(client_table_path);
        if (f_e === false) {
            createdbResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Client table file not avilable!"
                }
            };
            return createdbResponse;
        }
        f_e = this.checkFileExistsSync(client_data_path);
        if (f_e === false) {
            createdbResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Client default data file not avilable!"
                }
            };
            return createdbResponse;
        }
        let connection = typeorm_2.getConnection("default");
        try {
            console.log("process started");
            var filedata = fs.readFileSync(client_table_path, 'utf8');
            let searchString = '\\*{2}schema\\*{2}';
            let reschema = new RegExp(searchString, 'g');
            let formattedschema = filedata.replace(reschema, hospitalsResult.dbName);
            let searchprefix = '\\*{2}prefix\\*{2}';
            let reprefix = new RegExp(searchprefix, 'g');
            let formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
            fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
            const queries = this.readSqlFile('client_db/test.sql');
            connection.manager.queryRunner;
            for (let i = 0; i < queries.length; i++) {
                await connection.manager.query(queries[i]);
            }
            filedata = fs.readFileSync(client_data_path, 'utf8');
            searchString = '\\*{2}schema\\*{2}';
            reschema = new RegExp(searchString, 'g');
            formattedschema = filedata.replace(reschema, hospitalsResult.dbName);
            searchprefix = '\\*{2}prefix\\*{2}';
            reprefix = new RegExp(searchprefix, 'g');
            formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
            fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
            const queries_df = this.readSqlFile('client_db/test.sql');
            connection.manager.queryRunner;
            for (let i = 0; i < queries_df.length; i++) {
                await connection.manager.query(queries_df[i]);
            }
            let hospitalsRepository = connection.getRepository(hospitals_entity_1.Hospitals);
            let hospitalsToUpdate = await hospitalsRepository.findOne({ hospitalsId: id });
            hospitalsToUpdate.dbCreated = 1;
            await hospitalsRepository.save(hospitalsToUpdate);
        }
        catch (error) {
            console.log(error);
            createdbResponse = {
                status: common_2.ApiResponseStatus.ERROR,
                error: {
                    type: common_2.ErrorMessageType.ERROR,
                    message: "Error creating table!"
                }
            };
            return createdbResponse;
        }
        createdbResponse = {
            status: common_2.ApiResponseStatus.SUCCESS
        };
        return createdbResponse;
    }
    getUpdateHospitalDtoFromHospitalEntity(hospital) {
        let updateHospitalDto = new hospital_dto_1.UpdateHospitalsDto();
        updateHospitalDto.countryId = hospital.countryId;
        updateHospitalDto.stateId = hospital.stateId;
        updateHospitalDto.cityId = hospital.cityId;
        updateHospitalDto.address = hospital.address;
        updateHospitalDto.areaCode = hospital.areaCode;
        updateHospitalDto.email = hospital.email;
        updateHospitalDto.phoneNumber = hospital.phoneNumber;
        updateHospitalDto.logo = hospital.logo;
        updateHospitalDto.favicon = hospital.favIcon;
        updateHospitalDto.hospitalCode = hospital.hospitalCode;
        updateHospitalDto.govRegNumber = hospital.govRegNumber;
        updateHospitalDto.alertType = hospital.alertType;
        updateHospitalDto.smtpHost = hospital.smtpHost;
        updateHospitalDto.smtpUserName = hospital.smtpUserName;
        updateHospitalDto.smtpPassword = hospital.smtpPassword;
        updateHospitalDto.smtpPort = hospital.smtpPort;
        updateHospitalDto.smsGatewayUserName = hospital.smsGatewayUserName;
        updateHospitalDto.smsGatewayApiKey = hospital.smsGatewayApiKey;
        updateHospitalDto.smsGatewaySenderId = hospital.smsGatewaySenderId;
        updateHospitalDto.smsGatewayUrl = hospital.smsGatewayUrl;
        updateHospitalDto.hostingType = hospital.hostingType;
        updateHospitalDto.macAddress = hospital.macAddress;
        updateHospitalDto.dbHostName = hospital.dbHostName;
        updateHospitalDto.dbName = hospital.dbName;
        updateHospitalDto.dbUserName = hospital.dbUserName;
        updateHospitalDto.dbPassword = hospital.dbPassword;
        updateHospitalDto.tablePrefix = hospital.tablePrefix;
        updateHospitalDto.licenseHistoryId = hospital.licenseHistoryId;
        updateHospitalDto.status = hospital.status;
        return updateHospitalDto;
    }
    async updateHospital(hospitalDetails) {
        let { hospitalsId } = hospitalDetails, hospitalInfo = __rest(hospitalDetails, ["hospitalsId"]);
        let hospitalResponse;
        try {
            await this.hospitalsRepository.createQueryBuilder().update(hospitals_entity_1.Hospitals).set(hospitalInfo).where("hospitalsId =:hospitalsId", { hospitalsId }).execute();
            hospitalResponse = {
                data: true,
                status: common_2.ApiResponseStatus.SUCCESS
            };
        }
        catch (error) {
            hospitalResponse = {
                data: false,
                status: common_2.ApiResponseStatus.ERROR
            };
        }
        return hospitalResponse;
    }
    async upload(uploadFilesDto) {
        let fileContent = uploadFilesDto.fileContent;
        let fileName = uploadFilesDto.name;
        await fs.writeFile(fileupload_1.default.filePath + "/" + fileName, fileContent, { encoding: "base64" }, function () { console.log("done!"); });
        let response = {
            status: common_2.ApiResponseStatus.SUCCESS,
            data: uploadFilesDto
        };
        return response;
    }
    async getCount(conditions) {
        let count = await this.hospitalsRepository.count({ where: [...conditions] });
        return count;
    }
    async getClientCountry() {
        let query = await this.hospitalsRepository
            .createQueryBuilder("hospitals")
            .leftJoinAndSelect("hospitals.countries", "countries")
            .select("countries.country_name")
            .addSelect("COUNT(countries.country_name)", "countryCount")
            .groupBy("countries.country_name")
            .getRawMany();
        let result = query;
        if (query.length) {
            const MAX_COUNTRY_RESULT = 3;
            if (query.length > MAX_COUNTRY_RESULT) {
                let others = query.slice(MAX_COUNTRY_RESULT);
                let othersCount = others.reduce((a, b) => +a.countryCount + +b.countryCount);
                result = query.slice(0, MAX_COUNTRY_RESULT);
                result.push({ country_name: "Others", countryCount: othersCount });
            }
        }
        return result;
    }
    async getCountCountry(conditions) {
        let query = await this.hospitalsRepository
            .createQueryBuilder("hospitals")
            .select("hospitals.country_id")
            .where([...conditions])
            .groupBy("hospitals.country_id")
            .getRawMany();
        let count = 0;
        if (query.length) {
            count = query.length;
        }
        return count;
    }
    async getCountState(conditions) {
        let query = await this.hospitalsRepository
            .createQueryBuilder("hospitals")
            .select("hospitals.state_id")
            .where([...conditions])
            .groupBy("hospitals.state_id")
            .getRawMany();
        let count = 0;
        if (query.length) {
            count = query.length;
        }
        return count;
    }
    async getCountCity(conditions) {
        let query = await this.hospitalsRepository
            .createQueryBuilder("hospitals")
            .select("hospitals.city_id")
            .where([...conditions])
            .groupBy("hospitals.city_id")
            .getRawMany();
        let count = 0;
        if (query.length) {
            count = query.length;
        }
        return count;
    }
};
HospitalsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(hospitals_entity_1.Hospitals)),
    __param(1, common_1.Inject(common_1.forwardRef(() => mailer_service_1.MailerService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_service_1.MailerService, common_1.HttpService])
], HospitalsService);
exports.HospitalsService = HospitalsService;
//# sourceMappingURL=hospitals.service.js.map