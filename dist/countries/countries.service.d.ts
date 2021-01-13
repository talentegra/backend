import { CountriesDto, CreateCountriesDto, UpdateCountriesDto } from "./dto/countries.dto";
import { Countries } from "./entity/countries.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class CountriesService {
    private countriesRepository;
    constructor(countriesRepository: Repository<Countries>);
    findAll(): Promise<ApiResponse<CountriesDto[]>>;
    create(createCountriesDto: CreateCountriesDto): Promise<ApiResponse<Countries>>;
    update(updateCountiresDto: UpdateCountriesDto): Promise<ApiResponse<Countries>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    findById(id: number): Promise<ApiResponse<Countries>>;
    findByName(countryName: string): Promise<ApiResponse<Countries>>;
    getCount(conditions: [Partial<Countries>]): Promise<number>;
}
