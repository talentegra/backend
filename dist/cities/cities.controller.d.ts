import { CreateCitiesDto, UpdateCitiesDto } from "./dto/cities.dto";
import { CitiesService } from './cities.service';
import { Cities } from './entity/cities.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class CitiesController {
    private citiesService;
    constructor(citiesService: CitiesService);
    create(createCitiesDto: CreateCitiesDto): Promise<ApiResponse<Cities>>;
    findOne(id: number): Promise<ApiResponse<Cities>>;
    update(updateCitiesDto: UpdateCitiesDto): Promise<ApiResponse<Cities>>;
    findState(stateId: number): Promise<ApiResponse<Cities>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<Cities[]>>;
}
