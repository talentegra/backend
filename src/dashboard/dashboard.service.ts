import { Injectable } from '@nestjs/common';
import { GetDashboardCountDto, GetDashboardClientCountryDto } from './dto/dashboard.dto';
import { ApiResponse, ApiResponseStatus } from "../shared/common";
import { HospitalsService } from '../hospitals/hospitals.service';
import { DepartmentsService } from '../departments/departments.service';
import { ModulesService } from '../modules/modules.service';
import { PagesService } from '../pages/pages.service';
import { CountriesService } from '../countries/countries.service';
import { StatesService } from '../states/states.service';
import { CitiesService } from '../cities/cities.service';

@Injectable()
export class DashboardService {

    constructor(
        private hospitalService:HospitalsService,
        private departmentService:DepartmentsService,
        private moduleService:ModulesService,
        private pageService:PagesService,
        private countryService:CountriesService,
        private stateService:StatesService,
        private cityService:CitiesService
    ){}

    async getAllcounts():Promise<ApiResponse<GetDashboardCountDto>>{
        let response:ApiResponse<GetDashboardCountDto>;
        let countList:GetDashboardCountDto;

        let clientCount = await this.hospitalService.getCount([{status:1}]);        
        let departmentCount = await this.departmentService.getCount([{status:1}]);
        let moduleCount = await this.moduleService.getCount([{status:1}]);
        let pageCount = await this.pageService.getCount([{status:1}]);
        // let countryCount = await this.countryService.getCount([{status:1}]);
        // let stateCount = await this.stateService.getCount([{status:1}]);
        // let cityCount = await this.cityService.getCount([{status:1}]);
        let countryCount = await this.hospitalService.getCountCountry([{status:1}]);
        let stateCount = await this.hospitalService.getCountState([{status:1}]);
        let cityCount = await this.hospitalService.getCountCity([{status:1}]);

        countList = {
          "clientCount": clientCount,
          "departmentCount": departmentCount,
          "moduleCount": moduleCount,
          "pageCount": pageCount,
          "countryCount": countryCount,
          "stateCount": stateCount,
          "cityCount": cityCount
        };
        
        response = {
          status:ApiResponseStatus.SUCCESS,
          data:countList
        }

        return response;
    }

    async getClientcountry():Promise<ApiResponse<GetDashboardClientCountryDto>>{
        let response:ApiResponse<GetDashboardClientCountryDto>;
        let clientcountryData = await this.hospitalService.getClientCountry();

        response = {
            status:ApiResponseStatus.SUCCESS,
            data:clientcountryData
        }

        return response;
    }
}