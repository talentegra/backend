import { Injectable } from '@nestjs/common';
import { pagesRO,CreatePagesDto,UpdatePagesDto} from "./dto/pages.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Pages } from "./entity/pages.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse, ApiResponseStatus,ErrorMessageType } from "../shared/common";

@Injectable()
export class PagesService {

    constructor(@InjectRepository(Pages) private pagesRepository: Repository<Pages>){ }

    async findAll():Promise<ApiResponse<Pages[]>>{
        let pagesResult = await this.pagesRepository.find();
        let response:ApiResponse<Pages[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:pagesResult
        }  
        return response;      
    }
 
    async findByName(pagesName:string):Promise<ApiResponse<Pages>>{
        let pagessResult = await this.pagesRepository.findOne({pagesName: pagesName});
        let response:ApiResponse<Pages>;
        if(pagessResult){
            response= {
                data:pagessResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }
 
    async findById(id:string):Promise<ApiResponse<Pages>>{
        let pagessResult= await this.pagesRepository.findOne(id);
        let response:ApiResponse<Pages>;
        if(pagessResult){
            response= {
                data:pagessResult,
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
        let deleteResponse:DeleteResult =  await this.pagesRepository.delete({ pagesId: id});
        let result:ApiResponse<DeleteResult> = {
         status:ApiResponseStatus.SUCCESS,
         data:deleteResponse
        };
         return result;
     }

     async create(createPagesDto:CreatePagesDto):Promise<ApiResponse<Pages>>{
        let pages = new Pages();

        let isPagesExists = await this.pagesRepository.findOne({pagesName:  createPagesDto.pagesName}); 
        if(isPagesExists){
            let  updatedResponse:ApiResponse<Pages> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${ createPagesDto.pagesName} pages is already exists`
                }
                
            };
            return updatedResponse;
        }

        pages.modulesId= createPagesDto.modulesId;
        pages.pagesName = createPagesDto.pagesName;
        pages.status = createPagesDto.status;              
        let savedPages = await this.pagesRepository.save(pages);
        let  pagesResponse:ApiResponse<Pages> = {
            status:ApiResponseStatus.SUCCESS,
            data : savedPages
        };
        return pagesResponse;
    }

    async update( updatePagesDto : UpdatePagesDto):Promise<ApiResponse<Pages>>{
        let toUpdate = await this.pagesRepository.findOne(updatePagesDto.pagesId);
        let updatedData = {...toUpdate, ...updatePagesDto}
        updatedData.status = updatePagesDto.status;
        updatedData.modulesId = updatePagesDto.modulesId    
         
        updatedData = await this.pagesRepository.save(updatedData);
        let  updatedResponse:ApiResponse<Pages> = {
            status:ApiResponseStatus.SUCCESS,
            
        };
        return updatedResponse;
    }
 
    async getCount(conditions:[Partial<Pages>]):Promise<number>{
        let count = await this.pagesRepository.count({where:[...conditions]})
        return count;
    }
  
    async findId(id:string):Promise<ApiResponse<Pages>>{
        let pagessResult= await this.pagesRepository.findOne(id);
        let response:ApiResponse<Pages>;
        if(pagessResult){
            response= {
                data:pagessResult,
                status:ApiResponseStatus.SUCCESS
            }
        }else{
            response= {
               status:ApiResponseStatus.ERROR
            }
        }
              
        return response;
    }

    async findByModuleId(id:string):Promise<ApiResponse<Pages>>{
        let pagessResult= await this.pagesRepository.find({modulesId:id});
        let response:ApiResponse<Pages>;
        if(pagessResult){
            response= {
                data:pagessResult,
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
