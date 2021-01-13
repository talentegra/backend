import { Injectable } from '@nestjs/common';
import { CountriesDto, CreateCountriesDto, UpdateCountriesDto } from "./dto/countries.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Countries } from "./entity/countries.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse, ApiResponseStatus, ErrorMessageType, ErrorMessage } from "../shared/common";

@Injectable()
export class CountriesService {

    constructor(@InjectRepository(Countries) private countriesRepository: Repository<Countries>){ }

    async findAll():Promise<ApiResponse<CountriesDto[]>>{
        let countriesResult = await this.countriesRepository.find();
        let countriesList:CountriesDto[] = [];
        if(countriesResult.length) {
            for(let i=0;i<countriesResult.length;i++){
                let {...countriesInfo} =countriesResult[i];
                let countryDto:Partial<CountriesDto> = countriesInfo;
                countriesList.push(countryDto as CountriesDto);
            }
        }
        let response:ApiResponse<CountriesDto[]> = {
            status:ApiResponseStatus.SUCCESS,
            data:countriesList
        }  
        return response;
    }    

    async create(createCountriesDto:CreateCountriesDto):Promise<ApiResponse<Countries>>{
        let countries = new Countries();
        let countriesResponse:ApiResponse<Countries>;

        countries.countryName = createCountriesDto.countryName;
        if(countries.countryName==="")
        {
            countriesResponse = {
               status:ApiResponseStatus.ERROR,
               error:{
                    type:ErrorMessageType.ERROR,
                    message:"Country name is empty!"
               }
            }
        }
        else
        {
            let countriesResult = await this.countriesRepository.find();
            countries.countryId = countriesResult.length+10;
            console.log (countriesResult.length+10 );
            countries.iso2 = createCountriesDto.iso2;
            countries.iso3 = createCountriesDto.iso3;
            countries.countryCode = createCountriesDto.countryCode;
            countries.phoneCode = createCountriesDto.phoneCode;
            countries.capital = createCountriesDto.capital;
            countries.native = createCountriesDto.native;
            countries.status = createCountriesDto.status;
            countries.currency = createCountriesDto.currency;
            countries.status = createCountriesDto.status;
            let savedCountries = await this.countriesRepository.save(countries);
            if(savedCountries)
            {
                countriesResponse = {
                    status:ApiResponseStatus.SUCCESS,
                    data:savedCountries
                };
            }
            else
            {
                countriesResponse = {
                    status:ApiResponseStatus.ERROR,
                    error:{
                        type:ErrorMessageType.ERROR,
                        message:"Query Error"
                   }
                }
            }
        }
        return countriesResponse;
    }

    async update(updateCountiresDto:UpdateCountriesDto):Promise<ApiResponse<Countries>>{
        let toUpdate = await this.countriesRepository.findOne(updateCountiresDto.countryId);
        let updatedData = {...toUpdate, ...updateCountiresDto }
        updatedData.countryName = updateCountiresDto.countryName;
        updatedData.status = updateCountiresDto.status;
        updatedData.iso2 = updateCountiresDto.iso2;
        updatedData.iso3 = updateCountiresDto.iso3;
        updatedData.countryCode = updateCountiresDto.countryCode;
        updatedData.phoneCode = updateCountiresDto.phoneCode;
        updatedData.currency = updateCountiresDto.currency;
        updatedData.capital = updateCountiresDto.capital;
        updatedData.native = updateCountiresDto.native;
        updatedData = await this.countriesRepository.save(updatedData);
        let updatedResponse:ApiResponse<Countries> = {
            status:ApiResponseStatus.SUCCESS
        };
        return updatedResponse;
    }

    async delete(id:number):Promise<ApiResponse<DeleteResult>>{
        let deleteResponse:DeleteResult =  await this.countriesRepository.delete({ countryId: id});
        let result:ApiResponse<DeleteResult> = {
            status:ApiResponseStatus.SUCCESS,
            data:deleteResponse
        };
        return result;
    }

    async findById(id:number):Promise<ApiResponse<Countries>>{
        let countriesResult= await this.countriesRepository.findOne(id);
        let response:ApiResponse<Countries>;
        if(countriesResult){
            response = {
                data:countriesResult,
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

    async findByName(countryName:string):Promise<ApiResponse<Countries>>{
        let countriesResult = await this.countriesRepository.findOne({countryName: countryName});
        let response:ApiResponse<Countries>;
        if(countriesResult){
            response = {
                data:countriesResult,
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

    async getCount(conditions:[Partial<Countries>]):Promise<number>{
        let count = await this.countriesRepository.count({where:[...conditions]})
        return count;
    }
    
}