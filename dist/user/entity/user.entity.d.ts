import { UserSettings } from "./usersettings.entity";
export declare class User {
    userId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    phone: string;
    status: number;
    created_on: Date;
    updated_on: Date;
    entityVersion: any;
    activationKey: string;
    forgotPasswordKey: string;
    forgotPasswordCreationTime: Date;
    imageName: string;
    settings: Promise<UserSettings>;
}
