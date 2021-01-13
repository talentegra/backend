import { Controller,Get, Param, Body, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto, UserEmail, ResetPasswordDto } from './dto/create-user.dto';
import { UpdateUserSettingsDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
    
    constructor(private userService:UserService ){}
    
    @Post("create")
    create(@Body() createUserDto : CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Post("update")
    update(@Body() updateUserDto : UpdateUserDto){
        return this.userService.update(updateUserDto);
    }

    @Post("login")
    login(@Body() loginUserDto : LoginUserDto){
        return this.userService.login(loginUserDto);
    }

    @Get("findAll")       
    findAll() {
        return this.userService.findAll();     
    }

    @Get("find/:id")
    findById(@Param() id:string): string {
      return id;
    }

    @Post("forgotpassword")
    forgotpassword(@Body() userEmail : UserEmail){
        return this.userService.forgotpassword(userEmail);
    }

    @Post("verifyfogotpasswordlink")
    verifyPasswordLink(@Body() resetPasswordDto : ResetPasswordDto){
        return this.userService.verifyPasswordLink(resetPasswordDto);
    }

    @Post("resetpassword")
    resetPassword(@Body() resetPasswordDto : ResetPasswordDto){
        return this.userService.resetPassword(resetPasswordDto);
    }

    @Post("updateusersettings")
    updateUserSettings(@Body() updateUserSettingsDto : UpdateUserSettingsDto){
        return this.userService.updateUserSettings(updateUserSettingsDto);
    }
}
