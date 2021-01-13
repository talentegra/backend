import { Countries } from "src/countries/entity/countries.entity";
export declare class States {
    stateId: number;
    stateName: string;
    iso2: string;
    fipsCode: string;
    status: number;
    created_on: Date;
    updated_on: Date;
    entityVersion: number;
    countries: Countries;
    countryId: number;
}
