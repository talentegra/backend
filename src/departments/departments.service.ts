import { Injectable } from '@nestjs/common';
import { departmentsRO, CreateDepartmentsDto, UpdateDepartmentsDto } from "./dto/departments.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Departments} from "./entity/departments.entity";
import { Repository, DeleteResult } from "typeorm"; 
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from "../shared/common";


@Injectable()
export class DepartmentsService {

    constructor(@InjectRepository(Departments) private departmentsRepository: Repository<Departments>){ }

    async findAll():Promise<ApiResponse<Departments[]>>{
        let departmentsResult = await this.departmentsRepository.find();
        let response:ApiResponse<Departments[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:departmentsResult
        }  
        return response;
    }

    async findByName(departmentName:string):Promise<ApiResponse<Departments>>{
        let departmentsResult = await this.departmentsRepository.findOne({departmentName:departmentName});
        let response:ApiResponse<Departments>;
        if(departmentsResult){
            response= {
                data:departmentsResult,
                status:ApiResponseStatus.SUCCESS
            }
        }
        else{
            response= {
                status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async findById(id:string):Promise<ApiResponse<Departments>>{
        let departmentsResult= await this.departmentsRepository.findOne(id);
        let response:ApiResponse<Departments>;
        if(departmentsResult){
            response= {
                data:departmentsResult,
                status:ApiResponseStatus.SUCCESS
            }
        }
        else{
            response= {
                status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async delete(id:string):Promise<ApiResponse<DeleteResult>>{
        let deleteResponse:DeleteResult =  await this.departmentsRepository.delete({ departmentId:id });
        let result:ApiResponse<DeleteResult> = {
            status:ApiResponseStatus.SUCCESS,
            data:deleteResponse
        };
        return result;
    }

    async create(createDepartmentsDto:CreateDepartmentsDto):Promise<ApiResponse<Departments>>{
        let departments = new Departments();

        let isDeptExists = await this.departmentsRepository.findOne({departmentName:createDepartmentsDto.departmentName}); 
        if(isDeptExists){
            let  updatedResponse:ApiResponse<Departments> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${createDepartmentsDto.departmentName} department is already exists`
                }
                
            };
            return updatedResponse;
        }

        departments.departmentName = createDepartmentsDto.departmentName;
        departments.lab = createDepartmentsDto.lab;
        departments.noEquipment = createDepartmentsDto.noEquipment;
        departments.status = createDepartmentsDto.status;
        let savedDepartments = await this.departmentsRepository.save(departments);
        let departmentsResponse:ApiResponse<Departments> = {
            status:ApiResponseStatus.SUCCESS,
            data : savedDepartments
        };
        return departmentsResponse;
    }

    async update( updateDepartmentsDto : UpdateDepartmentsDto):Promise<ApiResponse<Departments>>{
        let toUpdate = await this.departmentsRepository.findOne(updateDepartmentsDto.departmentId);
        let updatedData = {...toUpdate, ...updateDepartmentsDto}
        updatedData.status = updateDepartmentsDto.status;
        updatedData.departmentName = updateDepartmentsDto.departmentName;
        updatedData.noEquipment = updateDepartmentsDto.noEquipment;
        updatedData = await this.departmentsRepository.save(updatedData);
        let updatedResponse:ApiResponse<Departments> = {
            status:ApiResponseStatus.SUCCESS,
        };
        return updatedResponse;
    }

    async getCount(conditions:[Partial<Departments>]):Promise<number>{
        let count = await this.departmentsRepository.count({where:[...conditions]})
        return count;
    }

}