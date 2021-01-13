import { CreateCountriesDto, UpdateCountriesDto, CountriesDto } from "./dto/countries.dto";
import { CountriesService } from './countries.service';
import { Countries } from './entity/countries.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class CountriesController {
    private countriesService;
    constructor(countriesService: CountriesService);
    findAll(): Promise<ApiResponse<CountriesDto[]>>;
    create(createCountriesDto: CreateCountriesDto): Promise<ApiResponse<Countries>>;
    update(updateCountriesDto: UpdateCountriesDto): Promise<ApiResponse<Countries>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    findOne(id: number): Promise<ApiResponse<Countries>>;
}
