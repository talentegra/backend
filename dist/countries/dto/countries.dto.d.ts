export declare class CountriesDto {
    readonly countryName: string;
    readonly iso2: string;
    readonly iso3: string;
    readonly countryCode: string;
    readonly phoneCode: string;
    readonly currency: string;
    readonly capital: string;
    readonly native: string;
    readonly status: number;
    readonly countryId: number;
}
export declare class CreateCountriesDto extends CountriesDto {
}
export declare class UpdateCountriesDto extends CountriesDto {
    readonly countryId: number;
}
