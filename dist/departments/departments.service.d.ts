import { CreateDepartmentsDto, UpdateDepartmentsDto } from "./dto/departments.dto";
import { Departments } from "./entity/departments.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class DepartmentsService {
    private departmentsRepository;
    constructor(departmentsRepository: Repository<Departments>);
    findAll(): Promise<ApiResponse<Departments[]>>;
    findByName(departmentName: string): Promise<ApiResponse<Departments>>;
    findById(id: string): Promise<ApiResponse<Departments>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    create(createDepartmentsDto: CreateDepartmentsDto): Promise<ApiResponse<Departments>>;
    update(updateDepartmentsDto: UpdateDepartmentsDto): Promise<ApiResponse<Departments>>;
    getCount(conditions: [Partial<Departments>]): Promise<number>;
}
