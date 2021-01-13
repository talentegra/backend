import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { UpdateUserDto, UserEmail, ResetPasswordDto } from './dto/create-user.dto';
import { UpdateUserSettingsDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../shared/common").ApiResponse<CreateUserDto>>;
    update(updateUserDto: UpdateUserDto): Promise<import("../shared/common").ApiResponse<UpdateUserDto>>;
    login(loginUserDto: LoginUserDto): Promise<import("../shared/common").ApiResponse<import("./dto/user-details.dto").UserDetailsDto>>;
    findAll(): Promise<import("./entity/user.entity").User[]>;
    findById(id: string): string;
    forgotpassword(userEmail: UserEmail): Promise<import("../shared/common").ApiResponse<boolean>>;
    verifyPasswordLink(resetPasswordDto: ResetPasswordDto): Promise<import("../shared/common").ApiResponse<boolean>>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<import("../shared/common").ApiResponse<boolean>>;
    updateUserSettings(updateUserSettingsDto: UpdateUserSettingsDto): Promise<import("../shared/common").ApiResponse<boolean>>;
}
