import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateCountriesDto, UpdateCountriesDto,CountriesDto } from "./dto/countries.dto";
import { CountriesService } from './countries.service';
import { Countries } from './entity/countries.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('countries')
@UseGuards(AuthGuard("access-token"))
export class CountriesController {

    constructor(private countriesService:CountriesService){}

    @Get("findAll")
    findAll():Promise<ApiResponse<CountriesDto[]>>{
       return this.countriesService.findAll();
    }

    @Post("create")
    create(@Body() createCountriesDto:CreateCountriesDto):Promise<ApiResponse<Countries>>{
        return this.countriesService.create(createCountriesDto);
    }

    @Post("update")
    update(@Body() updateCountriesDto:UpdateCountriesDto):Promise<ApiResponse<Countries>>{
       return this.countriesService.update(updateCountriesDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:number):Promise<ApiResponse<DeleteResult>>{
       return this.countriesService.delete(id);
    }

    @Get("find/:id")
    findOne(@Param("id") id:number):Promise<ApiResponse<Countries>>{
       return this.countriesService.findById(id);
    }

}