import { Module,forwardRef, HttpModule } from '@nestjs/common';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitals } from './entity/hospitals.entity';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports:[TypeOrmModule.forFeature([Hospitals]),forwardRef(()=>MailerModule),HttpModule],
  controllers: [HospitalsController],
  providers: [HospitalsService],
  exports : [HospitalsService]
})
export class HospitalsModule {}
