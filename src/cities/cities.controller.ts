import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateCitiesDto,UpdateCitiesDto} from "./dto/cities.dto";
import { CitiesService } from './cities.service';
import { Cities} from './entity/cities.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('cities')
@UseGuards(AuthGuard("access-token"))
export class CitiesController {

    constructor(private citiesService:CitiesService){}

    @Post("create")
    create(@Body() createCitiesDto:CreateCitiesDto):Promise<ApiResponse<Cities>>{
        return this.citiesService.create(createCitiesDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:number):Promise<ApiResponse<Cities>>{
       return this.citiesService.findById(id);
    }

    @Post("update")
    update(@Body() updateCitiesDto:UpdateCitiesDto):Promise<ApiResponse<Cities>>{
       return this.citiesService.update(updateCitiesDto);
    }
    
    @Get("state/:stateId")
    findState(@Param("stateId") stateId:number):Promise<ApiResponse<Cities>>{
       return this.citiesService.findByStateId(stateId);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:number):Promise<ApiResponse<DeleteResult>>{
       return this.citiesService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<Cities[]>>{
       return this.citiesService.findAll();
    }

}