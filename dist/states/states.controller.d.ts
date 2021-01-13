import { CreateStatesDto, UpdateStatesDto } from "./dto/states.dto";
import { StatesService } from './states.service';
import { States } from './entity/states.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
export declare class StatesController {
    private statesService;
    constructor(statesService: StatesService);
    create(createStatesDto: CreateStatesDto): Promise<ApiResponse<States>>;
    findOne(id: number): Promise<ApiResponse<States>>;
    update(updateStatesDto: UpdateStatesDto): Promise<ApiResponse<States>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    findAll(): Promise<ApiResponse<States[]>>;
    findCountry(countryId: number): Promise<ApiResponse<States>>;
}
