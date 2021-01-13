import { ApiProperty } from "@nestjs/swagger";

export interface pages{
    dmenuName:  string;
    dmenuId :string;
    status: number;    
}

export interface pagesRO{
    demnu : pages[];    
}

export class CreateDmenuDto{
    @ApiProperty()
    readonly dmenuName:  string;
    @ApiProperty()
    readonly modulesId : string;
    @ApiProperty()
    readonly status: number;    
}

export class UpdateDmenuDto{
    @ApiProperty()
    readonly dmenuId : string;
    @ApiProperty() 
    readonly modulesId: string;
    @ApiProperty()
    readonly dmenuName:  string;
    @ApiProperty()
    readonly status: number; 

}
