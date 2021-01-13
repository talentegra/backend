import { ThemeStyle, NavStyle, Layout } from "./settings.enum";
export declare class UpdateUserDto {
    readonly userName: string;
    readonly password: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: number;
}
export declare class UpdateUserSettingsDto {
    readonly settingId: string;
    readonly themeStyle: ThemeStyle;
    readonly navStyle: NavStyle;
    readonly layout: Layout;
}
