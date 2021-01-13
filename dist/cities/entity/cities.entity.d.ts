import { States } from "src/states/entity/states.entity";
export declare class Cities {
    cityId: number;
    cityName: string;
    latitude: string;
    longitude: string;
    status: number;
    created_on: Date;
    updated_on: Date;
    entityVersion: number;
    states: States;
    stateId: number;
}
