import { CreateModulesDto, UpdateModulesDto } from "./dto/modules.dto";
import { ModulesService } from './modules.service';
import { Modules } from './entity/modules.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class ModulesController {
    private modulesService;
    constructor(modulesService: ModulesService);
    create(createmodulesDto: CreateModulesDto): Promise<ApiResponse<Modules>>;
    findOne(id: string): Promise<ApiResponse<Modules>>;
    update(updateModulesDto: UpdateModulesDto): Promise<ApiResponse<Modules>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Modules[]>>;
}
