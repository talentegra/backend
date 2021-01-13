import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateDmenuDto,UpdateDmenuDto} from "./dto/dmenu.dto";
import { DmenuService } from './dmenu.service';
import { Dmenu} from './entity/dmenu.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('dmenu')
@UseGuards(AuthGuard("access-token"))
export class DmenuController {

    constructor(private dmenuService: DmenuService){}
    @Post("create")
    create(@Body() createdmenuDto : CreateDmenuDto):Promise<ApiResponse<Dmenu>>{     
        return this.dmenuService.create(createdmenuDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<Dmenu>>{       
       return this.dmenuService.findById(id);
    }
    
    @Post("update")
    update(@Body() updateDmenuDto : UpdateDmenuDto):Promise<ApiResponse<Dmenu>>{
       return this.dmenuService.update(updateDmenuDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{     
       return this.dmenuService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<Dmenu[]>>{       
       return this.dmenuService.findAll();
    }


}
