import { Module } from '@nestjs/common';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departments } from './entity/departments.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Departments])],
  controllers:[DepartmentsController],
  providers:[DepartmentsService],
  exports:[DepartmentsService]
})
export class DepartmentsModule {}