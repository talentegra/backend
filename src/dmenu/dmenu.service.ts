import { Injectable } from '@nestjs/common';
import { CreateDmenuDto,UpdateDmenuDto} from "./dto/dmenu.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Dmenu } from "./entity/dmenu.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse, ApiResponseStatus,ErrorMessageType } from "../shared/common";

@Injectable()
export class DmenuService {


    constructor(@InjectRepository(Dmenu) private dmenuRepository: Repository<Dmenu>){ }

    async findAll():Promise<ApiResponse<Dmenu[]>>{
        let dmenuResult = await this.dmenuRepository.find();
        let response:ApiResponse<Dmenu[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:dmenuResult
        }  
        return response;      
    }
 
    async findByName(dmenuName:string):Promise<ApiResponse<Dmenu>>{
        let dmenusResult = await this.dmenuRepository.findOne({dmenuName: dmenuName});
        let response:ApiResponse<Dmenu>;
        if(dmenusResult){
            response= {
                data:dmenusResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }
 
    async findById(id:string):Promise<ApiResponse<Dmenu>>{
        let dmenusResult= await this.dmenuRepository.findOne(id);
        let response:ApiResponse<Dmenu>;
        if(dmenusResult){
            response= {
                data:dmenusResult,
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
        let deleteResponse:DeleteResult =  await this.dmenuRepository.delete({ dmenuId: id});
        let result:ApiResponse<DeleteResult> = {
         status:ApiResponseStatus.SUCCESS,
         data:deleteResponse
        };
         return result;
     }

     async create(createDmenuDto:CreateDmenuDto):Promise<ApiResponse<Dmenu>>{
        let dmenu = new Dmenu();

        let isDmenuExists = await this.dmenuRepository.findOne({dmenuName:  createDmenuDto.dmenuName}); 
        if(isDmenuExists){
            let  updatedResponse:ApiResponse<Dmenu> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${ createDmenuDto.dmenuName} Dashboard Menus is already exists`
                }
                
            };
            return updatedResponse;
        }

        dmenu.modulesId= createDmenuDto.modulesId;
        dmenu.dmenuName = createDmenuDto.dmenuName;
        dmenu.status = createDmenuDto.status;              
        let savedDmenu = await this.dmenuRepository.save(dmenu);
        let  dmenuResponse:ApiResponse<Dmenu> = {
            status:ApiResponseStatus.SUCCESS,
            data : savedDmenu
        };
        return dmenuResponse;
    }

    async update( updateDmenuDto : UpdateDmenuDto):Promise<ApiResponse<Dmenu>>{
        let toUpdate = await this.dmenuRepository.findOne(updateDmenuDto.dmenuId);
        let updatedData = {...toUpdate, ...updateDmenuDto}
        updatedData.status = updateDmenuDto.status;
        updatedData.modulesId = updateDmenuDto.modulesId    
         
        updatedData = await this.dmenuRepository.save(updatedData);
        let  updatedResponse:ApiResponse<Dmenu> = {
            status:ApiResponseStatus.SUCCESS,
            
        };
        return updatedResponse;
    }
 
    async getCount(conditions:[Partial<Dmenu>]):Promise<number>{
        let count = await this.dmenuRepository.count({where:[...conditions]})
        return count;
    }
  
    async findId(id:string):Promise<ApiResponse<Dmenu>>{
        let dmenusResult= await this.dmenuRepository.findOne(id);
        let response:ApiResponse<Dmenu>;
        if(dmenusResult){
            response= {
                data:dmenusResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
              
        return response;
    }
 
}
