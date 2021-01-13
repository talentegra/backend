import { Repository } from 'typeorm';
import { User } from "./entity/user.entity";
import { CreateUserDto, LoginUserDto } from "./dto";
import { ApiResponse } from "src/shared/common";
import { UserDetailsDto } from "./dto/user-details.dto";
import { UpdateUserDto, UserEmail, ResetPasswordDto } from "./dto/create-user.dto";
import { MailerService } from "src/mailer/mailer.service";
import { UserSettings } from "./entity/usersettings.entity";
import { UpdateUserSettingsDto } from "./dto/update-user.dto";
import { DatabaseService } from "src/database/database.service";
export declare class UserService {
    private userRepository;
    private mailerService;
    private userSettingsRepository;
    private databaseservice;
    static userService: UserService;
    constructor(userRepository: Repository<User>, mailerService: MailerService, userSettingsRepository: Repository<UserSettings>, databaseservice: DatabaseService);
    create(createUserDto: CreateUserDto): Promise<ApiResponse<CreateUserDto>>;
    update(updateUserDto: UpdateUserDto): Promise<ApiResponse<UpdateUserDto>>;
    login(loginUserDto: LoginUserDto): Promise<ApiResponse<UserDetailsDto>>;
    findAll(): Promise<User[]>;
    findById(id: any): Promise<ApiResponse<UserDetailsDto>>;
    updateUser(userDetails: Partial<User>): Promise<ApiResponse<boolean>>;
    forgotpassword(userEmail: UserEmail): Promise<ApiResponse<boolean>>;
    verifyPasswordLink(resetPasswordDto: ResetPasswordDto): Promise<ApiResponse<boolean>>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<ApiResponse<boolean>>;
    insertDefaultUserSettings(userId: any): Promise<ApiResponse<boolean>>;
    updateUserSettings(updateUserSettingsDto: UpdateUserSettingsDto): Promise<ApiResponse<boolean>>;
}
