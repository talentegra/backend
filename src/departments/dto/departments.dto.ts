import { ApiProperty } from "@nestjs/swagger";

export interface departments{
    departmentName:string;
    status:number;
    lab:string;
    noEquipment:number;
}

export interface departmentsRO{
    departments:departments[];
}

export class CreateDepartmentsDto{
    @ApiProperty()
    readonly departmentName:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty()
    readonly lab:string;
    @ApiProperty()
    readonly noEquipment:number;
}

export class UpdateDepartmentsDto{
    @ApiProperty()
    readonly departmentName:string;
    @ApiProperty()
    readonly status:number;
    @ApiProperty()
    readonly lab:string;
    @ApiProperty()
    readonly noEquipment:number;
    @ApiProperty()
    readonly departmentId:string;
}