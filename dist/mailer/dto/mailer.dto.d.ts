export interface MailContent {
    to: string;
    subject: string;
    templateName: string;
}
export interface EmailVerify {
    activationId: string;
}
export interface UserEmailVerify extends EmailVerify {
    userId: string;
}
export interface HosiptalEmailVerify extends EmailVerify {
    hospitalsId: string;
}
