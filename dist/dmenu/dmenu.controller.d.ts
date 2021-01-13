import { CreateDmenuDto, UpdateDmenuDto } from "./dto/dmenu.dto";
import { DmenuService } from './dmenu.service';
import { Dmenu } from './entity/dmenu.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class DmenuController {
    private dmenuService;
    constructor(dmenuService: DmenuService);
    create(createdmenuDto: CreateDmenuDto): Promise<ApiResponse<Dmenu>>;
    findOne(id: string): Promise<ApiResponse<Dmenu>>;
    update(updateDmenuDto: UpdateDmenuDto): Promise<ApiResponse<Dmenu>>;
    delete(id: string): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Dmenu[]>>;
}
