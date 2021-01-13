import { UserValidatorInterface, UserInterface } from "@switchit/nestjs-oauth2-server";
export declare class UserValidator implements UserValidatorInterface {
    validate(userName: any, password: any): Promise<UserInterface>;
}
