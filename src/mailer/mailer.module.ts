import { Module, forwardRef } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';
import { UserModule } from 'src/user/user.module';
import { HospitalsModule } from 'src/hospitals/hospitals.module';

@Module({
  imports : [forwardRef(()=>UserModule),forwardRef(()=>HospitalsModule)],
  controllers: [MailerController],
  providers: [MailerService],
  exports:[MailerService]
})
export class MailerModule {}
