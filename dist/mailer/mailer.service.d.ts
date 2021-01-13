import { MailContent, UserEmailVerify, HosiptalEmailVerify } from './dto/mailer.dto';
import { ApiResponse } from 'src/shared/common';
import { UserService } from 'src/user/user.service';
import { HospitalsService } from 'src/hospitals/hospitals.service';
export declare class MailerService {
    private userService;
    private hospitalService;
    private transporter;
    constructor(userService: UserService, hospitalService: HospitalsService);
    verifyUserEmail(userEmailVerify: UserEmailVerify): Promise<ApiResponse<boolean>>;
    verifyHosiptalEmail(hospitalEmailVerify: HosiptalEmailVerify): Promise<ApiResponse<boolean>>;
    sendMail(mailContent: MailContent, templateObject: any): Promise<void>;
    getTemplateContent: (templateName: string) => Promise<string>;
    transporterObject(): any;
}
