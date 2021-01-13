import "reflect-metadata";
import { Injectable,Inject,forwardRef, HttpService } from '@nestjs/common';
import { hospitalsRO, CreateHospitalsDto,UpdateHospitalsDto,UploadFilesDto } from "./dto/hospital.dto"; 
import { InjectRepository } from "@nestjs/typeorm";
import { Hospitals } from "./entity/hospitals.entity";
import { Repository, DeleteResult, Table, getConnection } from "typeorm";
import { ApiResponse, ApiResponseStatus, ErrorMessageType, ErrorMessage } from "../shared/common"; 
import { createConnection } from "typeorm";
import * as fs from "fs";
import * as uuid from "uuid";
import { MailerService } from 'src/mailer/mailer.service';
import { CONFIG } from "src/config/config";
import { MailContent } from 'src/mailer/dto/mailer.dto';
import ConfigPhoto from "../config/fileupload";

var db_s :string
var db_p : string 


@Injectable()
export class HospitalsService {

    constructor(@InjectRepository(Hospitals) private hospitalsRepository: Repository<Hospitals>,
    @Inject(forwardRef(()=>MailerService))private mailerService:MailerService,private httpService:HttpService){ }

    async findAll():Promise<ApiResponse<Hospitals[]>>{
        let hospitalsResult = await this.hospitalsRepository.find();
        let response:ApiResponse<Hospitals[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:hospitalsResult
        }        
        return response;      
    }

    async findByName(hospitalsName:string):Promise<ApiResponse<Hospitals>>{
        let hospitalsResult = await this.hospitalsRepository.findOne({hospitalsName: hospitalsName});
        let response:ApiResponse<Hospitals>;
        if(hospitalsResult){
            response= {
                data:hospitalsResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async findById(id:string):Promise<ApiResponse<Hospitals>>{
        let hospitalsResult= await this.hospitalsRepository.findOne(id);
        let response:ApiResponse<Hospitals>;
        if(hospitalsResult){
            response= {
                data:hospitalsResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
              
        return response;
    }

    async delete(id:string):Promise<ApiResponse<DeleteResult>>{
        let deleteResponse:DeleteResult =  await this.hospitalsRepository.delete({ hospitalsId: id});
        let result:ApiResponse<DeleteResult> = {
         status:ApiResponseStatus.SUCCESS,
         data:deleteResponse
        };
         return result;
    }

    async create(createHospitalsDto:CreateHospitalsDto):Promise<ApiResponse<Hospitals>>{
        let hospitals = new Hospitals();   
        
        let isHospitalNameExists = await this.hospitalsRepository.findOne({hospitalsName: createHospitalsDto.hospitalsName}); 
        if(isHospitalNameExists){
            let  updatedResponse:ApiResponse<Hospitals> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${createHospitalsDto.hospitalsName} Hosptial is already exists`
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
        hospitals.smtpUserName = createHospitalsDto.smtpUserName
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
        let EMAIL_CONFIG = CONFIG.EMAIL;

        //const emailLink = CONFIG .EMAIL.FRONTEND_EMAIL_VERIFY_LINK+"hospital/"+mailActivationKey+"/"+savedHospitals.hospitalsId;
        const emailLink =EMAIL_CONFIG.FRONTEND_HOST+EMAIL_CONFIG.FRONTEND_EMAIL_VERIFY_LINK+"hospital/"+mailActivationKey+"/"+savedHospitals.hospitalsId;

        const mailcontent : MailContent = {
            to:savedHospitals.email,
            subject : "Account Verification",
            templateName:"hospital.register.email.html"
        }
        
        let fullName = hospitals.hospitalsName + ",  ";
        var templateObj :any = {
            email:savedHospitals.email,
            link : emailLink,
            host :  CONFIG.EMAIL.BACKEND_HOST,
            userName: fullName
        }


        this.mailerService.sendMail(mailcontent,templateObj);

        let  hospitalsResponse:ApiResponse<Hospitals> = {
            status:ApiResponseStatus.SUCCESS,
            data : savedHospitals
        };
        return hospitalsResponse;
    }

    async update( updateHosptialsDto : UpdateHospitalsDto ):Promise<ApiResponse<Hospitals>>{
        let toUpdate = await this.hospitalsRepository.findOne(updateHosptialsDto.hospitalsId);
        let updatedData = {...toUpdate, ...updateHosptialsDto}
        
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
        let  updatedResponse:ApiResponse<Hospitals> = {
            status:ApiResponseStatus.SUCCESS,
            
        };
        return updatedResponse;
    }

    
  readSqlFile = (filepath: string): string[] => {
    return fs
      .readFileSync(filepath)
      .toString()
      .replace(/\r?\n|\r/g, '')
      .split(';')
      .filter((query) => query?.length);
  };

  checkFileExistsSync(filepath){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.constants.F_OK);
    }
    catch(e){
      flag = false;
    }
    return flag;
  }

  async createDBId(id:string):Promise<ApiResponse<Hospitals>>{
    let hospitalsResult= await this.hospitalsRepository.findOne(id);
    let createdbResponse:ApiResponse<Hospitals>
    let client_table_path = "client_db/client_tables.sql";
    let client_data_path = "client_db/client_datas.sql";       
    var fs = require('fs');
    let f_e = this.checkFileExistsSync (client_table_path)
    if ( f_e === false ) {        
      createdbResponse = {
        status:ApiResponseStatus.ERROR,
        error:{
          type:ErrorMessageType.ERROR,
          message:"Client table file not avilable!"
        }
      }
      return createdbResponse;
    }
    f_e = this.checkFileExistsSync (client_data_path)
    if ( f_e === false ) {        
      createdbResponse = {
        status:ApiResponseStatus.ERROR,
        error:{
          type:ErrorMessageType.ERROR,
          message:"Client default data file not avilable!"
        }
      }
      return createdbResponse;
    }

    let connection = getConnection("default");

    try {

      console.log("process started");
      // Create Tables         
      var filedata = fs.readFileSync(client_table_path,'utf8');
      let searchString = '\\*{2}schema\\*{2}';      
      let reschema = new RegExp(searchString, 'g');
      let formattedschema = filedata.replace(reschema, hospitalsResult.dbName) 
      let searchprefix = '\\*{2}prefix\\*{2}'     
      let reprefix = new RegExp(searchprefix, 'g')
      let formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
      fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
      const queries = this.readSqlFile('client_db/test.sql');
      
      connection.manager.queryRunner   
      for (let i = 0; i < queries.length; i++) 
      {
        await connection.manager.query(queries[i]);
        // console.log(queries[i])
      }

      //Defalut Values         
      filedata = fs.readFileSync(client_data_path,'utf8');
      searchString = '\\*{2}schema\\*{2}';      
      reschema = new RegExp(searchString, 'g');
      formattedschema = filedata.replace(reschema, hospitalsResult.dbName);
      searchprefix = '\\*{2}prefix\\*{2}';
      reprefix = new RegExp(searchprefix, 'g');
      formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
      fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
      const queries_df = this.readSqlFile('client_db/test.sql');
      connection.manager.queryRunner;
      for (let i = 0; i < queries_df.length; i++) 
      {
        await connection.manager.query(queries_df[i]);
        // console.log(queries[i])
      }

      // update the hospital db created
      let hospitalsRepository = connection.getRepository(Hospitals);
      let hospitalsToUpdate = await hospitalsRepository.findOne({ hospitalsId : id });
      hospitalsToUpdate.dbCreated=1;
      await hospitalsRepository.save(hospitalsToUpdate); 
      
    } catch (error) {
      console.log(error);
      createdbResponse = {
        status:ApiResponseStatus.ERROR,
        error:{
          type:ErrorMessageType.ERROR,
          message:"Error creating table!"
        }
      }
      return createdbResponse   
    }

    createdbResponse = {
      status : ApiResponseStatus.SUCCESS
    }
    return createdbResponse;

    // let result = await createConnection({
    //   "name" : "secondary",
    //   "type": "postgres",
    //   "host": "localhost",
    //   "port": 5432,
    //   "username": "postgres",
    //   "password": "Pass@143",
    //   "database": "bluejay" ,
    //   "entities": ["dist/**/entity/*.entity.js","node_modules/@switchit/**/*.entity.js"],
    //   "synchronize":true,
    //   "schema":"eradcare",
    //   "entityPrefix":"erc_"        
    // }).then(async connection => {
    //   console.log("process started");
    //   // Create Tables         
    //   var filedata = fs.readFileSync(client_table_path,'utf8');
    //   let searchString = '\\*{2}schema\\*{2}';      
    //   let reschema = new RegExp(searchString, 'g');
    //   let formattedschema = filedata.replace(reschema, hospitalsResult.dbName) 
    //   let searchprefix = '\\*{2}prefix\\*{2}'     
    //   let reprefix = new RegExp(searchprefix, 'g')
    //   let formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
    //   fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
    //   const queries = this.readSqlFile('client_db/test.sql');
      
    //   connection.manager.queryRunner   
    //   for (let i = 0; i < queries.length; i++) 
    //   {
    //     await connection.manager.query(queries[i]);
    //     // console.log(queries[i])
    //   }

    //   //Defalut Values         
    //   filedata = fs.readFileSync(client_data_path,'utf8');
    //   searchString = '\\*{2}schema\\*{2}';      
    //   reschema = new RegExp(searchString, 'g');
    //   formattedschema = filedata.replace(reschema, hospitalsResult.dbName);
    //   searchprefix = '\\*{2}prefix\\*{2}';
    //   reprefix = new RegExp(searchprefix, 'g');
    //   formattedprefix = formattedschema.replace(reprefix, hospitalsResult.tablePrefix);
    //   fs.writeFileSync('client_db/test.sql', formattedprefix, { mode: 0o755 });
    //   const queries_df = this.readSqlFile('client_db/test.sql');
    //   connection.manager.queryRunner;
    //   for (let i = 0; i < queries_df.length; i++) 
    //   {
    //     await connection.manager.query(queries_df[i]);
    //     // console.log(queries[i])
    //   }

    //   // update the hospital db created
    //   let hospitalsRepository = connection.getRepository(Hospitals);
    //   let hospitalsToUpdate = await hospitalsRepository.findOne({ hospitalsId : id });
    //   hospitalsToUpdate.dbCreated=1;
    //   await hospitalsRepository.save(hospitalsToUpdate); 

    //   /* {
    //     "userDetails":{
    //         "email":"aprakash290@gmail.com",
    //         "phone":"1212",
    //         "dateOfJoining":"121212"
    //     },
    //     "hospitalInfo":{        
    //             "hospitalName":"psg hospital"
    
    //     }
    // } */

    // /*

    // let userDetails = {
    //   email:hospitalsToUpdate.email,
    //   phone:hospitalsToUpdate.phoneNumber,
    //   status: 1,
    //   dateOfJoining:new Date().toISOString()
    // }
    // let hospitalInfo = {
    //   hospitalName:hospitalsToUpdate.hospitalsName
    // }

    // let url = "http://"+hospitalsResult.dbName+"."+CONFIG.DEFAULTDATA.BACKEND_CLIENT_HOST+"user/createDefaultUser";
    // console.log(url);
    // // create default data in client schema
    // this.httpService.post(url,{userDetails,hospitalInfo}).subscribe(success => {
    //   console.log("default data created");
    // },error =>{
    //   console.log("error happend while creating defult data");
    //   console.log(error);
    // }) */
    //   connection.manager.connection.close();
    //   createdbResponse = {
    //     status : ApiResponseStatus.SUCCESS
    //   } 
      
    //   return createdbResponse;
    // }).catch(err => {
    //   console.error(err); 
          
    //   createdbResponse = {
    //     status:ApiResponseStatus.ERROR,
    //     error:{
    //       type:ErrorMessageType.ERROR,
    //       message:"Error creating table!"
    //     }
    //   }
    //   return createdbResponse      
    // });
     
    // console.log(createdbResponse);       
    // return createdbResponse;
  }
   
  getUpdateHospitalDtoFromHospitalEntity(hospital:Hospitals):UpdateHospitalsDto{
    let  updateHospitalDto = new UpdateHospitalsDto();
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
    updateHospitalDto.smtpUserName = hospital.smtpUserName
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

  async updateHospital(hospitalDetails:Partial<Hospitals>):Promise<ApiResponse<boolean>>{
    let {hospitalsId, ...hospitalInfo} = hospitalDetails;
    let hospitalResponse:ApiResponse<boolean>;
    try {
      await this.hospitalsRepository.createQueryBuilder().update(Hospitals).set(hospitalInfo).where("hospitalsId =:hospitalsId",{hospitalsId}).execute();
      hospitalResponse = {
        data:true,
        status:ApiResponseStatus.SUCCESS
      }
    } 
    catch (error) {
      hospitalResponse = {
        data:false,
        status:ApiResponseStatus.ERROR
      } 
    }
    return hospitalResponse;
  }

  async upload(uploadFilesDto: UploadFilesDto): Promise<ApiResponse<UploadFilesDto>> {
    let fileContent = uploadFilesDto.fileContent;
    let fileName = uploadFilesDto.name;
    await fs.writeFile(ConfigPhoto.filePath + "/" + fileName, fileContent, { encoding: "base64" }, function(){ console.log("done!") } );    
    let response: ApiResponse<UploadFilesDto> = {
      status:ApiResponseStatus.SUCCESS,
      data:uploadFilesDto
    }
    return response;
  }
    
  async getCount(conditions:[Partial<Hospitals>]):Promise<number>{
    let count = await this.hospitalsRepository.count({where:[...conditions]})
    return count;
  }

  async getClientCountry():Promise<any[]>{
    let query = await this.hospitalsRepository
      .createQueryBuilder("hospitals")
      .leftJoinAndSelect("hospitals.countries", "countries")
      .select("countries.country_name")
      .addSelect("COUNT(countries.country_name)", "countryCount")
      .groupBy("countries.country_name")
      .getRawMany();

    let result = query;
    if(query.length){
      const MAX_COUNTRY_RESULT = 3;
      if(query.length > MAX_COUNTRY_RESULT){
        let others = query.slice(MAX_COUNTRY_RESULT);
        let othersCount = others.reduce((a,b) => +a.countryCount + +b.countryCount);
        result = query.slice(0,MAX_COUNTRY_RESULT);
        result.push({country_name:"Others",countryCount:othersCount});
      }
    }
    return result;
  }
    
  async getCountCountry(conditions:[Partial<Hospitals>]):Promise<number>{
    let query = await this.hospitalsRepository
      .createQueryBuilder("hospitals")
      .select("hospitals.country_id")
      .where([...conditions])
      .groupBy("hospitals.country_id")
      .getRawMany();
    let count = 0;
    if(query.length){
      count = query.length;
    }
    return count;
  }

  async getCountState(conditions:[Partial<Hospitals>]):Promise<number>{
    let query = await this.hospitalsRepository
      .createQueryBuilder("hospitals")
      .select("hospitals.state_id")
      .where([...conditions])
      .groupBy("hospitals.state_id")
      .getRawMany();
    let count = 0;
    if(query.length){
      count = query.length;
    }
    return count;
  }

  async getCountCity(conditions:[Partial<Hospitals>]):Promise<number>{
    let query = await this.hospitalsRepository
      .createQueryBuilder("hospitals")
      .select("hospitals.city_id")
      .where([...conditions])
      .groupBy("hospitals.city_id")
      .getRawMany();
    let count = 0;
    if(query.length){
      count = query.length;
    }
    return count;
  }    
 
}