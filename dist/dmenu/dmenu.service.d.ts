import { CreateDmenuDto, UpdateDmenuDto } from "./dto/dmenu.dto";
import { Dmenu } from "./entity/dmenu.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class DmenuService {
    private dmenuRepository;
    constructor(dmenuRepository: Repository<Dmenu>);
    findAll(): Promise<ApiResponse<Dmenu[]>>;
    findByName(dmenuName: string): Promise<ApiResponse<Dmenu>>;
    findById(id: string): Promise<ApiResponse<Dmenu>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    create(createDmenuDto: CreateDmenuDto): Promise<ApiResponse<Dmenu>>;
    update(updateDmenuDto: UpdateDmenuDto): Promise<ApiResponse<Dmenu>>;
    getCount(conditions: [Partial<Dmenu>]): Promise<number>;
    findId(id: string): Promise<ApiResponse<Dmenu>>;
}
