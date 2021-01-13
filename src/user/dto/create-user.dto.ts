
export class CreateUserDto {
  readonly userName: string;
  readonly password: string;
  readonly firstName:string;
  readonly middleName: string;
  readonly lastName:string;
  readonly email: string;
  readonly phone: string;  
  readonly status: number;
}

export class UpdateUserDto extends CreateUserDto{ 
  readonly userId:string;
  readonly image:string;
  readonly imageName:string; 
}

export class UserEmail{
  email:string
}

export class ResetPasswordDto{
  userId:string;
  forgotPasswordId:string;
  password:string;
}
