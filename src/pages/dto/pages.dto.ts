import { ApiProperty } from "@nestjs/swagger";

export interface pages{
    pagesName:  string;
    modulesId :string;
    status: number;    
}

export interface pagesRO{
    pages : pages[];    
}

export class CreatePagesDto{
    @ApiProperty()
    readonly pagesName:  string;
    @ApiProperty()
    readonly modulesId : string;
    @ApiProperty()
    readonly status: number;    
}

export class UpdatePagesDto{
    @ApiProperty()
    readonly pagesId : string;
    @ApiProperty() 
    readonly modulesId: string;
    @ApiProperty()
    readonly pagesName:  string;
    @ApiProperty()
    readonly status: number; 

}
