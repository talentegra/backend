export interface states {
    stateName: string;
    iso2: string;
    fipsCode: string;
    status: number;
    countryId: number;
}
export interface statesRO {
    states: states[];
}
export declare class CreateStatesDto {
    readonly stateName: string;
    readonly iso2: string;
    readonly fipsCode: string;
    readonly status: number;
    readonly countryId: number;
}
export declare class UpdateStatesDto {
    readonly stateId: number;
    readonly stateName: string;
    readonly iso2: string;
    readonly fipsCode: string;
    readonly status: number;
    readonly countryId: number;
}
