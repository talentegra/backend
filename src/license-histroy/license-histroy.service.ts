import { Injectable} from '@nestjs/common';
import { licensehistroyRO,CreateLicenseHistroyDto,UpdateLicenseHistroyDto } from "./dto/license-histroy.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { LicenseHistroy } from "./entity/licence-histroy.entity";
import { HospitalsService } from '../hospitals/hospitals.service';
import { Hospitals } from '../hospitals/entity/hospitals.entity';
import { DepartmentsService } from '../departments/departments.service';
import { Departments } from '../departments/entity/departments.entity';
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse, ApiResponseStatus, ErrorMessageType, ErrorMessage } from "../shared/common";
import { createConnection } from "typeorm";
import { decryptAESString, getEncryptedMD5Value, getEncryptedShaValue } from "src/common/encrypt.decrypt.service";
import { CONFIG } from "src/config/config";
import { PagesService } from "src/pages/pages.service";
import {Pages} from "src/pages/entity/pages.entity"; 
import moment = require('moment');
 

@Injectable()
export class LicenseHistroyService {

    constructor(@InjectRepository(LicenseHistroy) private licenseHistroyRepository: Repository<LicenseHistroy>,
    private hospitalsService: HospitalsService, private departmentService: DepartmentsService, private pageservice : PagesService) { }
    
    
    
    async findAll():Promise<ApiResponse<LicenseHistroy[]>>{
        let hospitalResponse = await this.hospitalsService.findAll();
        let hospitalResult = hospitalResponse.data as Hospitals[];        
        let licenseHistroyResult = await this.licenseHistroyRepository.find();
        for (var i = 0; i < licenseHistroyResult.length; i++) 
        {
            for (var j = 0; j < hospitalResult.length; j++) 
            {
                if(hospitalResult[j]['hospitalsId'] === licenseHistroyResult[i]['hospitalId']) 
                {
                    let hospitalName = hospitalResult[j]['hospitalsName'];
                    licenseHistroyResult[i]["hospitalName"] = hospitalName;
                }
            }
        }
        let response:ApiResponse<LicenseHistroy[]> = {
            status:ApiResponseStatus.SUCCESS,
            data: licenseHistroyResult
        }  
        return response;      
    }
 
   async findById(id:string):Promise<ApiResponse<LicenseHistroy>>{
        let licenseHistroyResult= await this.licenseHistroyRepository.findOne(id);
        let response:ApiResponse<LicenseHistroy>;
        if( licenseHistroyResult){
            response= {
                data: licenseHistroyResult,
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
        let deleteResponse:DeleteResult =  await this.licenseHistroyRepository.delete({ licenseHistroyId: id});
        let result:ApiResponse<DeleteResult> = {
         status:ApiResponseStatus.SUCCESS,
         data:deleteResponse
        };
         return result;
     }

    async create(createLicenseHistroyDto:CreateLicenseHistroyDto):Promise<ApiResponse<LicenseHistroy>>{
        let licenseHistroy = new LicenseHistroy();                  
        let licenseHistroyResponse:ApiResponse<LicenseHistroy>;

        licenseHistroy.hospitalId = createLicenseHistroyDto.hospitalId;
        let hospitalDetailsResponse = await this.hospitalsService.findById(licenseHistroy.hospitalId);        
        let hospitalDetailsResponseStatus = hospitalDetailsResponse.status;
        if(hospitalDetailsResponseStatus === "Ok" )
        {
            let hospitalDetailsResponseData = hospitalDetailsResponse.data as Hospitals;
            let currentDate = moment();
            if (hospitalDetailsResponseData.dbCreated != 0 ) 
            {                
           
          //  let updatedhospitalDetails = await this.hospitalsService.update(this.hospitalsService.getUpdateHospitalDtoFromHospitalEntity(hospitalDetailsResponseData));
            
          
            let result = await createConnection({
                "name" : "secondary",
                "type": "postgres",
                "host": "localhost",
                "port": 5432,
                "username": "postgres",
                "password": "Pass@143",
                "database": "bluejay" ,
                "entities": ["dist/**/entity/*.entity.js","node_modules/@switchit/**/*.entity.js"],                
                "schema": hospitalDetailsResponseData.dbName,
                "entityPrefix":  hospitalDetailsResponseData.tablePrefix+"_"      
              }).then(async connection => {
                console.log("Adding lic File");
                connection.manager.queryRunner;
                let hospitalLimit = createLicenseHistroyDto.hospitalLimit;
                let modulesID = createLicenseHistroyDto.moduleIds;                 
                let deptELimit = createLicenseHistroyDto.departmentEquipmentLimit;
                let hospitalType = hospitalDetailsResponseData.hospitalType;
                let pageNames = [] ;
                var i;
                var k=0;

                for( i=0;i<modulesID.length;i++){                    
                    let pagesResponse = await this.pageservice.findByModuleId(modulesID[i]);
                    let pageResults = await pagesResponse.data as Pages[];
                    var j; 
                    console.log (modulesID[i]);                   
                    for (j=0;j<pageResults.length;j++)
                    {
                       pageNames[k] = pageResults[j].pagesName; 
                       console.log( "........"+ pageResults[j].pagesName );
                       k=k+1;
                    }   
                }
                let deptELimit1=getEncryptedMD5Value(getEncryptedShaValue(deptELimit.toString()));
                let licTo=currentDate.add(licenseHistroy.licenseValidity, 'M').toDate();   
               
                var year = licTo.getFullYear();
                var month = (1 + licTo.getMonth()).toString();
                month = month.length > 1 ? month : '0' + month;
                var day = licTo.getDate().toString();
                day = day.length > 1 ? day : '0' + day;
                let licDate1 = ( year + '-' + month + '-' +day )
                let sql = "delete from "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix +"_licsettings";
                await connection.manager.query(sql) 
                sql = "insert into "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_licsettings  ( hospital_limit,module_ids,department_equipment_limit,license_to,hospital_type) values (" + hospitalLimit +",'"+ pageNames.toString() +"','"+ deptELimit1.toString() +"','"+licDate1.toString() +"','" + hospitalType.toString() +"')" ; 
                await connection.manager.query(sql)               
                console.log("Licence added in clients database"); 

                sql = "select COUNT(*)  from "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_hospitals"
                let result = await connection.manager.query(sql);
                console.log (result[0].count)
                
                if ( result[0].count == 0 )
                {
                
                        //add Hospital in client Hospital.
                        let gender = 1 ;
                        sql = "insert into "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_hospitals  ("
                        sql = sql + "hospital_id, hospital_name,email,country_id, state_id,city_id,status "
                        sql = sql + ") values ('" + hospitalDetailsResponseData.hospitalsId +"','" + hospitalDetailsResponseData.hospitalsName + "','" + hospitalDetailsResponseData.email + "','" 
                        sql = sql + hospitalDetailsResponseData.countryId +"','" + hospitalDetailsResponseData.stateId +"','" + hospitalDetailsResponseData.cityId +"'," + gender + ")"
                        result = await connection.manager.query(sql);
                        console.log ("Hospital Added");
                    

                        //add the user name in database 
                        sql = "insert into "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_users  ("
                        sql = sql + "user_id, hospital_id,department_id,role_id,designation_id,country_id,state_id,city_id,first_name,last_name,gender,date_of_birth,email_id,phone_number,login_username,login_password,date_of_joining,activation_key,status"
                        sql = sql + ") values ( '" +"1669440d-779e-45b9-bb7f-4209b05f73f1" +"','"+ hospitalDetailsResponseData.hospitalsId +"','"
                        let departmentResponse = await this.departmentService.findByName("IT");
                        let departmentResult = await  departmentResponse.data as  Departments;
                        sql = sql +  departmentResult.departmentId + "','"
                        let sql_client  = "select  role_id from " +  hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_roles where role_name ='Administrator'";
                        let results = await connection.manager.query(sql_client);                
                        sql = sql + results[0].role_id + "','"  
                        sql_client  = "select  designation_id from " +  hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_designations where designation_name ='HR Manager'";
                        results = await connection.manager.query(sql_client);     
                        sql = sql + results[0].designation_id + "','" + hospitalDetailsResponseData.countryId +"','" + hospitalDetailsResponseData.stateId +"','"+hospitalDetailsResponseData.cityId+"','"
                        let date_of_birth = licDate1
                        sql = sql + "System" + "','" + "Admin" + "'," + gender +" ,'" + date_of_birth.toString() +"','" + hospitalDetailsResponseData.email + "','" + hospitalDetailsResponseData.phoneNumber +"','"
                        let decryptedUserName = getEncryptedMD5Value(getEncryptedShaValue("sysadmin"));
                        let activationKey  =  getEncryptedMD5Value(getEncryptedShaValue(CONFIG.EMAIL.VERIFIED_KEY));
                        sql = sql + decryptedUserName + "','" + decryptedUserName + "','" + date_of_birth.toString() + "','" + activationKey + "',"+ gender + ")";  
                        result = await connection.manager.query(sql);
                        console.log ("Default User Added..")      
                        
                        
                        //add the user settings
                        sql = "insert into "+ hospitalDetailsResponseData.dbName+"."+ hospitalDetailsResponseData.tablePrefix+"_usersettings  ("
                        sql = sql+ "setting_id, themestyle,navstyle,layout,user_id"
                        sql = sql +") values ('" + "da4a4b80-5e7f-4963-8ae1-deec0c5132ab" +"','" + "THEME_TYPE_SEMI_DARK" + "','" + "NAV_STYLE_FIXED" +"','" + "LAYOUT_TYPE_FULL" + "','" + "1669440d-779e-45b9-bb7f-4209b05f73f1" +"')"
                        result = await connection.manager.query(sql);
                        console.log ("User Setting Added")

                        
                }    

                connection.manager.connection.close();

                

              },error =>{
                console.log("Error Inserting lic");
                console.log(error);
              })
            
              
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
                status: ApiResponseStatus.SUCCESS,
                data: savedLicenseHistroy
            }; 
           } 
           else
           {
            licenseHistroyResponse= {
                status:ApiResponseStatus.ERROR,
                error:{
                     type:ErrorMessageType.ERROR,
                     message:"Database is not exists"
                }
             }
             return licenseHistroyResponse;
           }

        }
        else
        {
            licenseHistroyResponse= {
               status:ApiResponseStatus.ERROR,
               error:{
                    type:ErrorMessageType.ERROR,
                    message:"Client ID is not exists"
               }
            }
        }
        return licenseHistroyResponse;
    }

    async update( updateLicenseHistroyDto : UpdateLicenseHistroyDto):Promise<ApiResponse<LicenseHistroy>>{
        let toUpdate = await this.licenseHistroyRepository.findOne(updateLicenseHistroyDto.licenseHistroyId);
        let updatedData = {...toUpdate, ... updateLicenseHistroyDto}

        updatedData.hospitalId = updateLicenseHistroyDto.hospitalId;
        updatedData.hospitalLimit = updateLicenseHistroyDto.hospitalLimit;
        updatedData.departmentEquipmentLimit = updateLicenseHistroyDto.departmentEquipmentLimit;
        updatedData.licenseValidity = updateLicenseHistroyDto.licenseValidity;        
        updatedData.moduleIds = updateLicenseHistroyDto.moduleIds;
        updatedData.licenseTypeId = updateLicenseHistroyDto.licenseTypeId;
        updatedData.status = updateLicenseHistroyDto.status;
        
        updatedData = await this.licenseHistroyRepository.save(updatedData);
        let  updatedResponse:ApiResponse<LicenseHistroy> = {
            status:ApiResponseStatus.SUCCESS,
            
        };
        return updatedResponse;
    }



}
