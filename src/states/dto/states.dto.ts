import { ApiProperty } from "@nestjs/swagger";

export interface states{
    stateName:string;
    iso2:string;
    fipsCode:string;
    status:number;
    countryId:number;
}

export interface statesRO{
    states:states[];
}

export class CreateStatesDto{
    @ApiProperty()
    readonly stateName:string;
    @ApiProperty()
    readonly iso2:string;
    @ApiProperty()
    readonly fipsCode:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty()
    readonly countryId:number;
}

export class UpdateStatesDto{
    @ApiProperty()
    readonly stateId:number;
    @ApiProperty()
    readonly stateName:string;
    @ApiProperty()
    readonly iso2:string;
    @ApiProperty()
    readonly fipsCode:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty()
    readonly countryId:number;
}