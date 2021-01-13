import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { modulesRO,CreateModulesDto,UpdateModulesDto} from "./dto/modules.dto";
import { ModulesService } from './modules.service';
import { Modules} from './entity/modules.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('modules')
@UseGuards(AuthGuard("access-token"))
export class ModulesController {

    constructor(private modulesService: ModulesService){}

    @Post("create")
    create(@Body() createmodulesDto : CreateModulesDto):Promise<ApiResponse<Modules>>{     
        return this.modulesService.create(createmodulesDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<Modules>>{       
       return this.modulesService.findById(id);
    }

    @Post("update")
    update(@Body() updateModulesDto : UpdateModulesDto):Promise<ApiResponse<Modules>>{
       return this.modulesService.update(updateModulesDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{     
       return this.modulesService.delete(id);
    }

    
    @Get("findAll")
    findAll():Promise<ApiResponse<Modules[]>>{       
       return this.modulesService.findAll();
    }

}
