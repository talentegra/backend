import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateStatesDto,UpdateStatesDto} from "./dto/states.dto";
import { StatesService } from './states.service';
import { States} from './entity/states.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('states')
@UseGuards(AuthGuard("access-token"))
export class StatesController {

    constructor(private statesService: StatesService){}

    @Post("create")
    create(@Body() createStatesDto:CreateStatesDto):Promise<ApiResponse<States>>{
        return this.statesService.create(createStatesDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:number):Promise<ApiResponse<States>>{
        return this.statesService.findById(id);
    }

    @Post("update")
    update(@Body() updateStatesDto:UpdateStatesDto):Promise<ApiResponse<States>>{
        return this.statesService.update(updateStatesDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:number):Promise<ApiResponse<DeleteResult>>{
        return this.statesService.delete(id);
    }
    
    @Get("findAll")
    findAll():Promise<ApiResponse<States[]>>{
        return this.statesService.findAll();
    }

    @Get("country/:countryId")
    findCountry(@Param("countryId") countryId:number):Promise<ApiResponse<States>>{
        return this.statesService.findByCountryId(countryId);
    }

}