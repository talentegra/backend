import {Entity,JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, ManyToOne} from "typeorm";
import { Countries } from "src/countries/entity/countries.entity";
import { States } from "src/states/entity/states.entity";
import { Cities } from "src/cities/entity/cities.entity";


@Entity({name:"hospitals"})
export class Hospitals {

    @PrimaryGeneratedColumn("uuid",{
        name:"hospitals_id"        
    })
    hospitalsId:string;   

    @Column({
        name:"hospitals_name",
        nullable:false,
        unique:true
    })
    hospitalsName:string;   

    @Column({
        name:"address",
        nullable:false
    })
    address:string;
    
    @Column({
        name:"area_code",
        nullable:false
    })
    areaCode:string;

    @Column({
        name:"email",
        nullable:false
    })
    email:string;

    @Column({
        name:"phone_number",
        nullable:false
    })
    phoneNumber:string;

    @Column({
        name:"logo",
        nullable:false
    })
    logo:string;

    @Column({
        name:"favicon",
        nullable:true
    })
    favIcon:string;

    @Column({
        name:"hospital_code",
        nullable:true
    })
    hospitalCode:string;

    @Column({
        name:"govt_reg_number",
        nullable:true 
    })
    govRegNumber:string;

    @Column({
        name:"alert_type",
        nullable:false
    })
    alertType:number;

    @Column({
        name:"smtp_host",
        nullable:true
    })
    smtpHost:string;

    @Column({
        name:"smtp_username",
        nullable:true
    })
    smtpUserName:string;
    
    @Column({
        name:"smtp_password",
        nullable:true
    })
    smtpPassword:string;

    @Column({
        name:"smtp_port",
        nullable:true
    })
    smtpPort:number;

    @Column({
        name:"sms_gateway_username",
        nullable:true
    })
    smsGatewayUserName:string;
   
    @Column({
        name:"sms_gateway_apikey",
        nullable:true
    })
    smsGatewayApiKey:string;

    @Column({
        name:"sms_gateway_senderid",
        nullable:true
    })
    smsGatewaySenderId:string;

    @Column({
        name:"sms_gateway_url",
        nullable:true
    })
    smsGatewayUrl:string;

    @Column({
        name:"hosting_type",
        nullable:false
    })
    hostingType:string;

    @Column({
        name:"mac_address",
        nullable:false
    })
    macAddress:string;
    
    @Column({
        name:"db_hostname",
        nullable:false
    })
    dbHostName:string;

    @Column({
        name:"db_name",
        nullable:false
    })
    dbName:string;

    @Column({
        name:"db_username",
        nullable:false
    })
    dbUserName:string;
 
    @Column({
        name:"db_password",
        nullable:false
    })
    dbPassword:string;

    @Column({
        name:"table_prefix",
        nullable:false
    })
    tablePrefix:string; 

    @Column({
        name:"license_history_id",
        nullable:true
    })
    licenseHistoryId:string;

    @Column({
        name:"hospital_type",
        nullable:true
    })
    hospitalType:string;

    @Column()
    status:number;
    
    @CreateDateColumn()
    created_on:Date;

    @UpdateDateColumn()
    updated_on:Date;

    @VersionColumn({
        name : "entity_Version"
    })
    entityVersion:number;

    @ManyToOne(type=>Countries)
    @JoinColumn({name:"country_id"})
    countries:Countries;
    @Column({
        name:"country_id"
    })
    countryId:number;

    @ManyToOne(type=>States)
    @JoinColumn({name:"state_id"})
    states:States;    
    @Column({
        name:"state_id"
    })
    stateId:number;  

    @ManyToOne(type=>Cities)
    @JoinColumn({name:"city_id"})
    cities:Cities;
    @Column({
        name:"city_id"
    })
    cityId:number

    @Column({
        name:"activation_key",
        nullable:true
    })    
    activationKey:string;

    @Column({

        name : "db_created",
        nullable : true 

    })
    dbCreated : number

}