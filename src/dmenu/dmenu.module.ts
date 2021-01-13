import { Module } from '@nestjs/common';
import { DmenuController } from './dmenu.controller';
import { DmenuService } from './dmenu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Dmenu } from './entity/dmenu.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dmenu])],
  controllers: [DmenuController],
  providers: [DmenuService],
  exports :[DmenuService]
})
export class DmenuModule {}
