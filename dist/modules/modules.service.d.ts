import { CreateModulesDto, UpdateModulesDto } from "./dto/modules.dto";
import { Modules } from "./entity/modules.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class ModulesService {
    private modulesRepository;
    constructor(modulesRepository: Repository<Modules>);
    findAll(): Promise<ApiResponse<Modules[]>>;
    findByName(modulesName: string): Promise<ApiResponse<Modules>>;
    findById(id: string): Promise<ApiResponse<Modules>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    create(createModulesDto: CreateModulesDto): Promise<ApiResponse<Modules>>;
    update(updateModulesDto: UpdateModulesDto): Promise<ApiResponse<Modules>>;
    getCount(conditions: [Partial<Modules>]): Promise<number>;
}
