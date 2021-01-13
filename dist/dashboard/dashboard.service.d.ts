import { GetDashboardCountDto, GetDashboardClientCountryDto } from './dto/dashboard.dto';
import { ApiResponse } from "../shared/common";
import { HospitalsService } from '../hospitals/hospitals.service';
import { DepartmentsService } from '../departments/departments.service';
import { ModulesService } from '../modules/modules.service';
import { PagesService } from '../pages/pages.service';
import { CountriesService } from '../countries/countries.service';
import { StatesService } from '../states/states.service';
import { CitiesService } from '../cities/cities.service';
export declare class DashboardService {
    private hospitalService;
    private departmentService;
    private moduleService;
    private pageService;
    private countryService;
    private stateService;
    private cityService;
    constructor(hospitalService: HospitalsService, departmentService: DepartmentsService, moduleService: ModulesService, pageService: PagesService, countryService: CountriesService, stateService: StatesService, cityService: CitiesService);
    getAllcounts(): Promise<ApiResponse<GetDashboardCountDto>>;
    getClientcountry(): Promise<ApiResponse<GetDashboardClientCountryDto>>;
}
