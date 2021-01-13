import { GetDashboardCountDto, GetDashboardClientCountryDto } from './dto/dashboard.dto';
import { DashboardService } from './dashboard.service';
import { ApiResponse } from 'src/shared/common';
export declare class DashboardController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    getAllcounts(): Promise<ApiResponse<GetDashboardCountDto>>;
    getClientcountry(): Promise<ApiResponse<GetDashboardClientCountryDto>>;
}
