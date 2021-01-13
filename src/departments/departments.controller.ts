import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { departmentsRO, CreateDepartmentsDto, UpdateDepartmentsDto} from "./dto/departments.dto";
import { DepartmentsService} from './departments.service';
import { Departments} from './entity/departments.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('departments')
@UseGuards(AuthGuard("access-token"))
export class DepartmentsController {
    constructor(private departmentsService:DepartmentsService){}

    @Post("create")
    create(@Body() createDepartmentsDto:CreateDepartmentsDto):Promise<ApiResponse<Departments>>{
        return this.departmentsService.create(createDepartmentsDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<Departments>>{
       return this.departmentsService.findById(id);
    }

    @Post("update")
    update(@Body() updateDepartmentsDto:UpdateDepartmentsDto):Promise<ApiResponse<Departments>>{
       return this.departmentsService.update(updateDepartmentsDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{
       return this.departmentsService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<Departments[]>>{
       return this.departmentsService.findAll();
    }

}