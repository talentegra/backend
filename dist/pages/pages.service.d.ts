import { CreatePagesDto, UpdatePagesDto } from "./dto/pages.dto";
import { Pages } from "./entity/pages.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class PagesService {
    private pagesRepository;
    constructor(pagesRepository: Repository<Pages>);
    findAll(): Promise<ApiResponse<Pages[]>>;
    findByName(pagesName: string): Promise<ApiResponse<Pages>>;
    findById(id: string): Promise<ApiResponse<Pages>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    create(createPagesDto: CreatePagesDto): Promise<ApiResponse<Pages>>;
    update(updatePagesDto: UpdatePagesDto): Promise<ApiResponse<Pages>>;
    getCount(conditions: [Partial<Pages>]): Promise<number>;
    findId(id: string): Promise<ApiResponse<Pages>>;
    findByModuleId(id: string): Promise<ApiResponse<Pages>>;
}
