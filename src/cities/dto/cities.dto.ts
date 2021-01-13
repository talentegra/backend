import { ApiProperty } from "@nestjs/swagger";

export interface cities{
    cityName:string;
    latitude:string;
    longitude:string;
    status:number;
    stateId:number;
}

export interface citiesRO{
    cities:cities[];
}

export class CreateCitiesDto{
    @ApiProperty()
    readonly cityName:string;
    @ApiProperty()
    readonly latitude:string;
    @ApiProperty()
    readonly longitude:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty()
    readonly stateId:number;
}

export class UpdateCitiesDto{
    @ApiProperty()
    readonly cityName:string;
    @ApiProperty()
    readonly latitude:string;
    @ApiProperty()
    readonly longitude:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty() 
    readonly cityId:number;
    @ApiProperty()
    readonly stateId:number;
}