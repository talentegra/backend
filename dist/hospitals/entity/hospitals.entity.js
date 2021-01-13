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
const countries_entity_1 = require("src/countries/entity/countries.entity");
const states_entity_1 = require("src/states/entity/states.entity");
const cities_entity_1 = require("src/cities/entity/cities.entity");
let Hospitals = class Hospitals {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid", {
        name: "hospitals_id"
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "hospitalsId", void 0);
__decorate([
    typeorm_1.Column({
        name: "hospitals_name",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "hospitalsName", void 0);
__decorate([
    typeorm_1.Column({
        name: "address",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({
        name: "area_code",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "areaCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "email",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        name: "phone_number",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column({
        name: "logo",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({
        name: "favicon",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "favIcon", void 0);
__decorate([
    typeorm_1.Column({
        name: "hospital_code",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "hospitalCode", void 0);
__decorate([
    typeorm_1.Column({
        name: "govt_reg_number",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "govRegNumber", void 0);
__decorate([
    typeorm_1.Column({
        name: "alert_type",
        nullable: false
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "alertType", void 0);
__decorate([
    typeorm_1.Column({
        name: "smtp_host",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smtpHost", void 0);
__decorate([
    typeorm_1.Column({
        name: "smtp_username",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smtpUserName", void 0);
__decorate([
    typeorm_1.Column({
        name: "smtp_password",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smtpPassword", void 0);
__decorate([
    typeorm_1.Column({
        name: "smtp_port",
        nullable: true
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "smtpPort", void 0);
__decorate([
    typeorm_1.Column({
        name: "sms_gateway_username",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smsGatewayUserName", void 0);
__decorate([
    typeorm_1.Column({
        name: "sms_gateway_apikey",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smsGatewayApiKey", void 0);
__decorate([
    typeorm_1.Column({
        name: "sms_gateway_senderid",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smsGatewaySenderId", void 0);
__decorate([
    typeorm_1.Column({
        name: "sms_gateway_url",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "smsGatewayUrl", void 0);
__decorate([
    typeorm_1.Column({
        name: "hosting_type",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "hostingType", void 0);
__decorate([
    typeorm_1.Column({
        name: "mac_address",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "macAddress", void 0);
__decorate([
    typeorm_1.Column({
        name: "db_hostname",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "dbHostName", void 0);
__decorate([
    typeorm_1.Column({
        name: "db_name",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "dbName", void 0);
__decorate([
    typeorm_1.Column({
        name: "db_username",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "dbUserName", void 0);
__decorate([
    typeorm_1.Column({
        name: "db_password",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "dbPassword", void 0);
__decorate([
    typeorm_1.Column({
        name: "table_prefix",
        nullable: false
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "tablePrefix", void 0);
__decorate([
    typeorm_1.Column({
        name: "license_history_id",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "licenseHistoryId", void 0);
__decorate([
    typeorm_1.Column({
        name: "hospital_type",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "hospitalType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Hospitals.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Hospitals.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Hospitals.prototype, "updated_on", void 0);
__decorate([
    typeorm_1.VersionColumn({
        name: "entity_Version"
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "entityVersion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => countries_entity_1.Countries),
    typeorm_1.JoinColumn({ name: "country_id" }),
    __metadata("design:type", countries_entity_1.Countries)
], Hospitals.prototype, "countries", void 0);
__decorate([
    typeorm_1.Column({
        name: "country_id"
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "countryId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => states_entity_1.States),
    typeorm_1.JoinColumn({ name: "state_id" }),
    __metadata("design:type", states_entity_1.States)
], Hospitals.prototype, "states", void 0);
__decorate([
    typeorm_1.Column({
        name: "state_id"
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "stateId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cities_entity_1.Cities),
    typeorm_1.JoinColumn({ name: "city_id" }),
    __metadata("design:type", cities_entity_1.Cities)
], Hospitals.prototype, "cities", void 0);
__decorate([
    typeorm_1.Column({
        name: "city_id"
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "cityId", void 0);
__decorate([
    typeorm_1.Column({
        name: "activation_key",
        nullable: true
    }),
    __metadata("design:type", String)
], Hospitals.prototype, "activationKey", void 0);
__decorate([
    typeorm_1.Column({
        name: "db_created",
        nullable: true
    }),
    __metadata("design:type", Number)
], Hospitals.prototype, "dbCreated", void 0);
Hospitals = __decorate([
    typeorm_1.Entity({ name: "hospitals" })
], Hospitals);
exports.Hospitals = Hospitals;
//# sourceMappingURL=hospitals.entity.js.map