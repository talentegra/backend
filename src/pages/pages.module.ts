import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Pages } from './entity/pages.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pages])],
  controllers: [PagesController],
  providers: [PagesService],
  exports :[PagesService]
})
export class PagesModule {}
