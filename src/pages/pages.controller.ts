import { Controller, Get, Body, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { pagesRO,CreatePagesDto,UpdatePagesDto} from "./dto/pages.dto";
import { PagesService } from './pages.service';
import { Pages} from './entity/pages.entity';
import { ApiResponse } from '../shared/common';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('pages')
@UseGuards(AuthGuard("access-token"))
export class PagesController {

    constructor(private pagesService: PagesService){}
    @Post("create")
    create(@Body() createpagesDto : CreatePagesDto):Promise<ApiResponse<Pages>>{     
        return this.pagesService.create(createpagesDto);
    }

    @Get("find/:id")
    findOne(@Param("id") id:string):Promise<ApiResponse<Pages>>{       
       return this.pagesService.findById(id);
    }
    
    @Post("update")
    update(@Body() updatePagesDto : UpdatePagesDto):Promise<ApiResponse<Pages>>{
       return this.pagesService.update(updatePagesDto);
    }

    @Delete("delete/:id")
    delete(@Param("id") id:string):Promise<ApiResponse<DeleteResult>>{     
       return this.pagesService.delete(id);
    }

    @Get("findAll")
    findAll():Promise<ApiResponse<Pages[]>>{       
       return this.pagesService.findAll();
    }

    @Get("findByModuleId/:id")
    findByModuleId(@Param("id") id:string):Promise<ApiResponse<Pages>>{       
       return this.pagesService.findByModuleId(id);
    }
    


}
