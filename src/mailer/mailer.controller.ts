import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ApiResponse } from 'src/shared/common';
import { UserEmailVerify, HosiptalEmailVerify } from './dto/mailer.dto';

@Controller('mailer')
export class MailerController {

    constructor(private mailerService: MailerService){}
    @Post("useremailverify")
    verifyUserEmail(@Body() userEmailVerify : UserEmailVerify):Promise<ApiResponse<boolean>>{     
        return this.mailerService.verifyUserEmail(userEmailVerify);
    }
    
    @Post("hospitalemailverify")
    verifyHospitalEmail(@Body() hospitalEmailVerify : HosiptalEmailVerify):Promise<ApiResponse<boolean>>{     
        return this.mailerService.verifyHosiptalEmail(hospitalEmailVerify);
    }
}
