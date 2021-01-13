import { CreateStatesDto, UpdateStatesDto } from "./dto/states.dto";
import { States } from "./entity/states.entity";
import { Repository, DeleteResult } from "typeorm";
import { ApiResponse } from "../shared/common";
export declare class StatesService {
    private statesRepository;
    constructor(statesRepository: Repository<States>);
    findAll(): Promise<ApiResponse<States[]>>;
    findByName(stateName: string): Promise<ApiResponse<States>>;
    findById(id: number): Promise<ApiResponse<States>>;
    findByCountryId(countryId: number): Promise<ApiResponse<States>>;
    delete(id: number): Promise<ApiResponse<DeleteResult>>;
    create(createStatesDto: CreateStatesDto): Promise<ApiResponse<States>>;
    update(updateStatesDto: UpdateStatesDto): Promise<ApiResponse<States>>;
    getCount(conditions: [Partial<States>]): Promise<number>;
}
