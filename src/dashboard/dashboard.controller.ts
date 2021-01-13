import { Controller, Get } from '@nestjs/common';
import { GetDashboardCountDto, GetDashboardClientCountryDto } from './dto/dashboard.dto';
import { DashboardService } from './dashboard.service';
import { ApiResponse } from 'src/shared/common';

@Controller('dashboard')
export class DashboardController {

	constructor(private dashboardService: DashboardService){}

	@Get("getAllcounts")
	getAllcounts():Promise<ApiResponse<GetDashboardCountDto>>{
		return this.dashboardService.getAllcounts();
	}

	@Get("getClientcountry")
	getClientcountry():Promise<ApiResponse<GetDashboardClientCountryDto>>{
		return this.dashboardService.getClientcountry();
	}

}