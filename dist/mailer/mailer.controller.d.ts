import { MailerService } from './mailer.service';
import { ApiResponse } from 'src/shared/common';
import { UserEmailVerify, HosiptalEmailVerify } from './dto/mailer.dto';
export declare class MailerController {
    private mailerService;
    constructor(mailerService: MailerService);
    verifyUserEmail(userEmailVerify: UserEmailVerify): Promise<ApiResponse<boolean>>;
    verifyHospitalEmail(hospitalEmailVerify: HosiptalEmailVerify): Promise<ApiResponse<boolean>>;
}
