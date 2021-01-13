import { Injectable } from '@nestjs/common';
import { statesRO,CreateStatesDto,UpdateStatesDto} from "./dto/states.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { States } from "./entity/states.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from "../shared/common";

@Injectable()
export class StatesService {

    constructor(@InjectRepository(States) private statesRepository: Repository<States>){ }

    async findAll():Promise<ApiResponse<States[]>>{
        let statesResult = await this.statesRepository.find();
        let response:ApiResponse<States[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:statesResult
        }  
        return response;
    }

    async findByName(stateName:string):Promise<ApiResponse<States>>{
        let statesResult = await this.statesRepository.findOne({stateName: stateName});
        let response:ApiResponse<States>;
        if(statesResult){
            response = {
                data:statesResult,
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

    async findById(id:number):Promise<ApiResponse<States>>{
        let statesResult = await this.statesRepository.findOne(id);
        let response:ApiResponse<States>;
        if(statesResult){
            response = {
                data:statesResult,
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

    async findByCountryId(countryId:number):Promise<ApiResponse<States>>{
        let statesResult = await this.statesRepository.find({countryId: countryId});
        let response:ApiResponse<States>;
        if(statesResult){
            response = {
                data:statesResult,
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
        let deleteResponse:DeleteResult =  await this.statesRepository.delete({ stateId: id});
        let result:ApiResponse<DeleteResult> = {
            status:ApiResponseStatus.SUCCESS,
            data:deleteResponse
        };
        return result;
    }

    async create(createStatesDto:CreateStatesDto):Promise<ApiResponse<States>>{
        let states = new States();
        let isStateExists = await this.statesRepository.findOne({stateName:createStatesDto.stateName}); 
        if(isStateExists){
            let updatedResponse:ApiResponse<States> = {
                status:ApiResponseStatus.ERROR,
                error:{
                    type:ErrorMessageType.ERROR,
                    message:`The ${createStatesDto.stateName} state is already exists`
                }
                
            };
            return updatedResponse;
        }
        states.stateName = createStatesDto.stateName
        states.status = createStatesDto.status;
        states.countryId = createStatesDto.countryId;
        states.iso2 = createStatesDto.iso2;
        states.fipsCode = createStatesDto.fipsCode;
        let savedModules = await this.statesRepository.save(states);
        let stateResponse:ApiResponse<States> = {
            status:ApiResponseStatus.SUCCESS,
            data:savedModules
        };
        return stateResponse;
    }

    async update(updateStatesDto:UpdateStatesDto):Promise<ApiResponse<States>>{
        let toUpdate = await this.statesRepository.findOne(updateStatesDto.stateId);
        let updatedData = {...toUpdate, ...updateStatesDto}
        updatedData.status = updateStatesDto.status;
        updatedData.stateName = updateStatesDto.stateName;
        updatedData.countryId = updateStatesDto.countryId;
        updatedData.iso2 = updateStatesDto.iso2;
        updatedData.fipsCode = updateStatesDto.fipsCode;
        updatedData = await this.statesRepository.save(updatedData);
        let updatedResponse:ApiResponse<States> = {
            status:ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }

    async getCount(conditions:[Partial<States>]):Promise<number>{
        let count = await this.statesRepository.count({where:[...conditions]})
        return count;
    }

}