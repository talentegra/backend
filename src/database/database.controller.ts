import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ApiResponse } from '../shared/common';

@Controller('database')
export class DatabaseController {

  constructor(private databaseService: DatabaseService){}

  @Get("insertAdminData")
  insertAdminData(){
    return this.databaseService.insertAdminData();
  }

}