import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { hospitalsRO,CreateHospitalsDto,UpdateHospitalsDto,UploadFilesDto} from "./dto/hospital.dto";
import { HospitalsService } from './hospitals.service';
import { Hospitals} from './entity/hospitals.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('hospitals')
//@UseGuards(AuthGuard("access-token"))
export class HospitalsController {

    constructor(private hospitalsService: HospitalsService){}

    @Post("create")
    create(@Body() createHospitalsDto : CreateHospitalsDto):Promise<ApiResponse<Hospitals>>{     
        return this.hospitalsService.create(createHospitalsDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<Hospitals>>{       
       return this.hospitalsService.findById(id);
    }

    @Post("update")
    update(@Body() updateHospitalsDto : UpdateHospitalsDto):Promise<ApiResponse<Hospitals>>{
       return this.hospitalsService.update(updateHospitalsDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{     
       return this.hospitalsService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<Hospitals[]>>{       
       return this.hospitalsService.findAll();
    }

    
  
  @Post("upload")
  upload(@Body() uploadFilesDto:UploadFilesDto):Promise<ApiResponse<UploadFilesDto>>{
        return this.hospitalsService.upload(uploadFilesDto);
    }
 

  @Post("createDBid/:id")
  createDBid(@Param("id") id:string):Promise<ApiResponse<Hospitals>>{       
     return this.hospitalsService.createDBId(id) ;
    }

}
