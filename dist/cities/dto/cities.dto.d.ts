export interface cities {
    cityName: string;
    latitude: string;
    longitude: string;
    status: number;
    stateId: number;
}
export interface citiesRO {
    cities: cities[];
}
export declare class CreateCitiesDto {
    readonly cityName: string;
    readonly latitude: string;
    readonly longitude: string;
    readonly status: number;
    readonly stateId: number;
}
export declare class UpdateCitiesDto {
    readonly cityName: string;
    readonly latitude: string;
    readonly longitude: string;
    readonly status: number;
    readonly cityId: number;
    readonly stateId: number;
}
