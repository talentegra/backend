import { CreateCitiesDto, UpdateCitiesDto } from "./dto/cities.dto";
import { Cities } from "./entity/cities.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class CitiesService {
    private citiesRepository;
    constructor(citiesRepository: Repository<Cities>);
    findAll(): Promise<ApiResponse<Cities[]>>;
    findByName(cityName: string): Promise<ApiResponse<Cities>>;
    findById(id: number): Promise<ApiResponse<Cities>>;
    findByStateId(stateId: number): Promise<ApiResponse<Cities>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    create(createCitiesDto: CreateCitiesDto): Promise<ApiResponse<Cities>>;
    update(updateCitiesDto: UpdateCitiesDto): Promise<ApiResponse<Cities>>;
    getCount(conditions: [Partial<Cities>]): Promise<number>;
}
