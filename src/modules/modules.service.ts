import { Injectable } from '@nestjs/common';
import { modulesRO,CreateModulesDto,UpdateModulesDto} from "./dto/modules.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Modules } from "./entity/modules.entity";
import { Repository, DeleteResult } from "typeorm";
import {  ApiResponse, ApiResponseStatus,ErrorMessageType } from "../shared/common";

@Injectable()
export class ModulesService {

    constructor(@InjectRepository(Modules) private modulesRepository: Repository<Modules>){ }

    async findAll():Promise<ApiResponse<Modules[]>>{
        let modulesResult = await this.modulesRepository.find();
        let response:ApiResponse<Modules[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:modulesResult
        }  
        return response;      
    }

    async findByName(modulesName:string):Promise<ApiResponse<Modules>>{
        let modulesResult = await this.modulesRepository.findOne({modulesName: modulesName});
        let response:ApiResponse<Modules>;
        if(modulesResult){
            response= {
                data:modulesResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async findById(id:string):Promise<ApiResponse<Modules>>{
        let modulesResult= await this.modulesRepository.findOne(id);
        let response:ApiResponse<Modules>;
        if(modulesResult){
            response= {
                data:modulesResult,
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
        let deleteResponse:DeleteResult =  await this.modulesRepository.delete({ modulesId: id});
        let result:ApiResponse<DeleteResult> = {
         status:ApiResponseStatus.SUCCESS,
         data:deleteResponse
        };
         return result;
     }

     async create(createModulesDto:CreateModulesDto):Promise<ApiResponse<Modules>>{
        let modules = new Modules();

        let isModulesExists = await this.modulesRepository.findOne({modulesName:  createModulesDto.modulesName}); 
        if(isModulesExists){
            let  updatedResponse:ApiResponse<Modules> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${ createModulesDto.modulesName} Modules is already exists`
                }
                
            };
            return updatedResponse;
        }
        modules.modulesName = createModulesDto.modulesName;
        modules.status = createModulesDto.status;               
        let savedModules = await this.modulesRepository.save(modules);
        let  modulesResponse:ApiResponse<Modules> = {
            status:ApiResponseStatus.SUCCESS,
            data : savedModules
        };
        return modulesResponse;
    }

    async update( updateModulesDto : UpdateModulesDto):Promise<ApiResponse<Modules>>{
        let toUpdate = await this.modulesRepository.findOne(updateModulesDto.modelesId);
        let updatedData = {...toUpdate, ...updateModulesDto}
        updatedData.status = updateModulesDto.status;
        
        updatedData = await this.modulesRepository.save(updatedData);
        let  updatedResponse:ApiResponse<Modules> = {
            status:ApiResponseStatus.SUCCESS,
            
        };
        return updatedResponse;
    }

    async getCount(conditions:[Partial<Modules>]):Promise<number>{
        let count = await this.modulesRepository.count({where:[...conditions]})
        return count;
    }
    
}
