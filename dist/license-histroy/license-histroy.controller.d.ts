import { CreateLicenseHistroyDto, UpdateLicenseHistroyDto } from "./dto/license-histroy.dto";
import { LicenseHistroyService } from './license-histroy.service';
import { LicenseHistroy } from './entity/licence-histroy.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class LicenseHistroyController {
    private licenseHistroysService;
    constructor(licenseHistroysService: LicenseHistroyService);
    create(createLicenseHistroyDto: CreateLicenseHistroyDto): Promise<ApiResponse<LicenseHistroy>>;
    findOne(id: string): Promise<ApiResponse<LicenseHistroy>>;
    update(updateLicenseHistroyDto: UpdateLicenseHistroyDto): Promise<ApiResponse<LicenseHistroy>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<LicenseHistroy[]>>;
}
