import { Injectable } from '@nestjs/common';
import { CreateCitiesDto,UpdateCitiesDto} from "./dto/cities.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Cities} from "./entity/cities.entity";
import { Repository, DeleteResult } from "typeorm";
import {  ApiResponse, ApiResponseStatus,ErrorMessageType } from "../shared/common";

@Injectable()
export class CitiesService {

    constructor(@InjectRepository(Cities) private citiesRepository: Repository<Cities>){ }

    async findAll():Promise<ApiResponse<Cities[]>>{
        let citiesResult = await this.citiesRepository.find();
        let response:ApiResponse<Cities[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:citiesResult
        }
        return response;
    }

    async findByName(cityName:string):Promise<ApiResponse<Cities>>{
        let citiesResult = await this.citiesRepository.findOne({cityName: cityName});
        let response:ApiResponse<Cities>;
        if(citiesResult){
            response = {
                data:citiesResult,
                status:ApiResponseStatus.SUCCESS
            }
        }
        else{
            response = {
                status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async findById(id:number):Promise<ApiResponse<Cities>>{
        let citiesResult= await this.citiesRepository.findOne(id);
        let response:ApiResponse<Cities>;
        if(citiesResult){
            response = {
                data:citiesResult,
                status:ApiResponseStatus.SUCCESS
            }
        }
        else{
            response = {
                status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }
    
    async findByStateId(stateId:number):Promise<ApiResponse<Cities>>{
        let citiesResult = await this.citiesRepository.find({stateId: stateId});
        let response:ApiResponse<Cities>;
        if(citiesResult){
            response = {
                data:citiesResult,
                status:ApiResponseStatus.SUCCESS
            }
        }
        else{
            response = {
                status:ApiResponseStatus.ERROR
            }
        }
        return response;
    }

    async delete(id:number):Promise<ApiResponse<DeleteResult>>{
        let deleteResponse:DeleteResult =  await this.citiesRepository.delete({ cityId: id});
        let result:ApiResponse<DeleteResult> = {
            status:ApiResponseStatus.SUCCESS,
            data:deleteResponse
        };
        return result;
     }

     async create(createCitiesDto:CreateCitiesDto):Promise<ApiResponse<Cities>>{
        let cities = new Cities();
        let isCitiesExists = await this.citiesRepository.findOne({cityName: createCitiesDto.cityName});
        if(isCitiesExists){
            let updatedResponse:ApiResponse<Cities> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${ createCitiesDto.cityName} Cities is already exists`
                }
            };
            return updatedResponse;
        }
        cities.cityName = createCitiesDto.cityName;
        cities.status =  createCitiesDto.status;
        cities.stateId = createCitiesDto.stateId;
        cities.latitude = createCitiesDto.latitude;
        cities.longitude = createCitiesDto.longitude;
        let savedCities = await this.citiesRepository.save(cities);
        let citiesResponse:ApiResponse<Cities> = {
            status:ApiResponseStatus.SUCCESS,
            data:savedCities
        };
        return citiesResponse;
    }

    async update(updateCitiesDto:UpdateCitiesDto):Promise<ApiResponse<Cities>>{
        let toUpdate = await this.citiesRepository.findOne(updateCitiesDto.cityId);
        let updatedData = {...toUpdate, ...updateCitiesDto}
        updatedData.cityName = updateCitiesDto.cityName;
        updatedData.status = updateCitiesDto.status;
        updatedData.stateId = updateCitiesDto.stateId;
        updatedData.latitude = updateCitiesDto.latitude;
        updatedData.longitude = updateCitiesDto.longitude;
        updatedData = await this.citiesRepository.save(updatedData);
        let updatedResponse:ApiResponse<Cities> = {
            status:ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }

    async getCount(conditions:[Partial<Cities>]):Promise<number>{
        let count = await this.citiesRepository.count({where:[...conditions]})
        return count;
    }

}