import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { licensehistroy,CreateLicenseHistroyDto,UpdateLicenseHistroyDto} from "./dto/license-histroy.dto";
import { LicenseHistroyService } from './license-histroy.service';
import { LicenseHistroy } from './entity/licence-histroy.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('license-histroy')
@UseGuards(AuthGuard("access-token"))
export class LicenseHistroyController {

    constructor(private licenseHistroysService: LicenseHistroyService){}

    @Post("create")
    create(@Body() createLicenseHistroyDto : CreateLicenseHistroyDto):Promise<ApiResponse<LicenseHistroy>>{     
        return this.licenseHistroysService.create(createLicenseHistroyDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<LicenseHistroy>>{       
       return this.licenseHistroysService.findById(id);
    }

    @Post("update")
    update(@Body() updateLicenseHistroyDto : UpdateLicenseHistroyDto):Promise<ApiResponse<LicenseHistroy>>{
       return this.licenseHistroysService.update(updateLicenseHistroyDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{     
       return this.licenseHistroysService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<LicenseHistroy[]>>{       
       return this.licenseHistroysService.findAll();
    }

}
