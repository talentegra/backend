export declare class CreateUserDto {
    readonly userName: string;
    readonly password: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: number;
}
export declare class UpdateUserDto extends CreateUserDto {
    readonly userId: string;
    readonly image: string;
    readonly imageName: string;
}
export declare class UserEmail {
    email: string;
}
export declare class ResetPasswordDto {
    userId: string;
    forgotPasswordId: string;
    password: string;
}
