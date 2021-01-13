import { CreateHospitalsDto, UpdateHospitalsDto, UploadFilesDto } from "./dto/hospital.dto";
import { HospitalsService } from './hospitals.service';
import { Hospitals } from './entity/hospitals.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class HospitalsController {
    private hospitalsService;
    constructor(hospitalsService: HospitalsService);
    create(createHospitalsDto: CreateHospitalsDto): Promise<ApiResponse<Hospitals>>;
    findOne(id: string): Promise<ApiResponse<Hospitals>>;
    update(updateHospitalsDto: UpdateHospitalsDto): Promise<ApiResponse<Hospitals>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Hospitals[]>>;
    upload(uploadFilesDto: UploadFilesDto): Promise<ApiResponse<UploadFilesDto>>;
    createDBid(id: string): Promise<ApiResponse<Hospitals>>;
}
