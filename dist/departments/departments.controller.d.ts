import { CreateDepartmentsDto, UpdateDepartmentsDto } from "./dto/departments.dto";
import { DepartmentsService } from './departments.service';
import { Departments } from './entity/departments.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class DepartmentsController {
    private departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentsDto: CreateDepartmentsDto): Promise<ApiResponse<Departments>>;
    findOne(id: string): Promise<ApiResponse<Departments>>;
    update(updateDepartmentsDto: UpdateDepartmentsDto): Promise<ApiResponse<Departments>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Departments[]>>;
}
