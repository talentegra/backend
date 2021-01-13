import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from 'class-validator';

export class CountriesDto{
    @IsString()
    @IsNotEmpty({message: "Country name is not empty"})
    @ApiProperty()
    readonly countryName: string;
    @ApiProperty()
    readonly iso2: string;
    @ApiProperty()
    readonly iso3: string;
    @ApiProperty()
    readonly countryCode: string;
    @ApiProperty()
    readonly phoneCode: string;
    @ApiProperty()
    readonly currency: string;
    @ApiProperty()
    readonly capital: string;
    @ApiProperty()
    readonly native: string;
    @ApiProperty()
    readonly status: number;
    @ApiProperty()
    readonly countryId:number;
}

export class CreateCountriesDto extends CountriesDto{
    
}

export class UpdateCountriesDto extends CountriesDto {
    @ApiProperty()
    readonly countryId: number;
}