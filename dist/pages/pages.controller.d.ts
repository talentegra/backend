import { CreatePagesDto, UpdatePagesDto } from "./dto/pages.dto";
import { PagesService } from './pages.service';
import { Pages } from './entity/pages.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class PagesController {
    private pagesService;
    constructor(pagesService: PagesService);
    create(createpagesDto: CreatePagesDto): Promise<ApiResponse<Pages>>;
    findOne(id: string): Promise<ApiResponse<Pages>>;
    update(updatePagesDto: UpdatePagesDto): Promise<ApiResponse<Pages>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Pages[]>>;
    findByModuleId(id: string): Promise<ApiResponse<Pages>>;
}
