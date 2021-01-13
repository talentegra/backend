import { ApiProperty } from "@nestjs/swagger";
 
export interface modules{
   
    modulesName:  string;
    status: number;    
}

export interface modulesRO{
    modules : modules[];    
}

export class CreateModulesDto{
    @ApiProperty()
    readonly modulesName:  string;
    @ApiProperty()
    readonly status: number;    
}

export class UpdateModulesDto{
    @ApiProperty()
    readonly modelesId : string;
    @ApiProperty()
    readonly modulesName:  string;
    @ApiProperty()
    readonly status: number; 
}