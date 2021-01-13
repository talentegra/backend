import { ApiProperty } from "@nestjs/swagger";

export class GetDashboardCountDto{
	@ApiProperty()
	readonly clientCount:number;
	@ApiProperty()
	readonly departmentCount:number;
	@ApiProperty()
	readonly moduleCount:number;
	@ApiProperty()
	readonly pageCount:number;
	@ApiProperty()
	readonly countryCount:number;
	@ApiProperty()
	readonly stateCount:number;
	@ApiProperty()
	readonly cityCount:number;
}

export class GetDashboardClientCountryDto{
	@ApiProperty()
	readonly clientcountryData:any[];
}