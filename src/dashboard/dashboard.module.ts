import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { HospitalsModule } from 'src/hospitals/hospitals.module';
import { DepartmentsModule } from 'src/departments/departments.module';
import { ModulesModule } from 'src/modules/modules.module';
import { PagesModule } from 'src/pages/pages.module';
import { CountriesModule } from 'src/countries/countries.module';
import { StatesModule } from 'src/states/states.module';
import { CitiesModule } from 'src/cities/cities.module';

@Module({
	imports: [
		HospitalsModule,
		DepartmentsModule,
		ModulesModule,
		PagesModule,
		CountriesModule,
		StatesModule,
		CitiesModule
	],
	controllers: [DashboardController],
	providers: [DashboardService],
	exports: [DashboardService]
})
export class DashboardModule {}