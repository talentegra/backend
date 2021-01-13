import { ApiProperty } from "@nestjs/swagger";

export interface licensehistroy {
    hospitalId:string;
    hospitalLimit:number;
    departmentEquipmentLimit: Array<{ department_id: number,machine_limit:number }>[];
    licenseValidity:number;
    moduleIds:string[];
    licenseTypeId:number;
    status: number;    
}

export interface licensehistroyRO{
    licensehistroy : licensehistroy[];    
}

export class CreateLicenseHistroyDto{
    @ApiProperty()
    readonly hospitalId:string;
    @ApiProperty()
    readonly hospitalLimit:number;
    @ApiProperty()
    readonly departmentEquipmentLimit: Array<{ department_id: number,machine_limit:number }>[];
    @ApiProperty()
    readonly licenseValidity:number;    
    @ApiProperty()
    readonly moduleIds:string[];
    @ApiProperty()
    readonly licenseTypeId:number;
    @ApiProperty()
    readonly status: number;  
}

export class UpdateLicenseHistroyDto{    
    @ApiProperty()
    readonly hospitalId:string;
    @ApiProperty()
    readonly hospitalLimit:number;
    @ApiProperty()
    readonly departmentEquipmentLimit: Array<{ department_id: number,machine_limit:number }>[];
    @ApiProperty()
    readonly licenseValidity:number;
    @ApiProperty()
    readonly moduleIds:string[];
    @ApiProperty()
    readonly licenseTypeId:number;
    @ApiProperty()
    readonly status: number;
    @ApiProperty()  
    readonly licenseHistroyId : string;
}