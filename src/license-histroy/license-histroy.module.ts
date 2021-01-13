import { Module } from '@nestjs/common';
import { LicenseHistroyController } from './license-histroy.controller';
import { LicenseHistroyService } from './license-histroy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseHistroy } from './entity/licence-histroy.entity';
import { HospitalsModule } from '../hospitals/hospitals.module';
import {PagesModule } from  '../pages/pages.module';
import {DepartmentsModule} from '../departments/departments.module';


@Module({
  imports:[TypeOrmModule.forFeature([LicenseHistroy]),HospitalsModule,DepartmentsModule, PagesModule],
  controllers: [LicenseHistroyController],
  providers: [LicenseHistroyService],
  exports: [LicenseHistroyService],
})
export class LicenseHistroyModule {}
