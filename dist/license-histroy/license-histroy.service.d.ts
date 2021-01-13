import { CreateLicenseHistroyDto, UpdateLicenseHistroyDto } from "./dto/license-histroy.dto";
import { LicenseHistroy } from "./entity/licence-histroy.entity";
import { HospitalsService } from '../hospitals/hospitals.service';
import { DepartmentsService } from '../departments/departments.service';
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
import { PagesService } from "src/pages/pages.service";
export declare class LicenseHistroyService {
    private licenseHistroyRepository;
    private hospitalsService;
    private departmentService;
    private pageservice;
    constructor(licenseHistroyRepository: Repository<LicenseHistroy>, hospitalsService: HospitalsService, departmentService: DepartmentsService, pageservice: PagesService);
    findAll(): Promise<ApiResponse<LicenseHistroy[]>>;
    findById(id: string): Promise<ApiResponse<LicenseHistroy>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    create(createLicenseHistroyDto: CreateLicenseHistroyDto): Promise<ApiResponse<LicenseHistroy>>;
    update(updateLicenseHistroyDto: UpdateLicenseHistroyDto): Promise<ApiResponse<LicenseHistroy>>;
}
