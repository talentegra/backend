import { UserSettings } from "../entity/usersettings.entity";

export class UserDetailsDto{
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    status:number;  
    userName:string;
    password:string;
    userId:string;
    activationKey:string;
    image:string;
    fileExtension:string;
    settings:Partial<UserSettings>;
}