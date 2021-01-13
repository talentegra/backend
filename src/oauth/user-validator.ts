import {Injectable,Inject} from "@nestjs/common";
import {UserValidatorInterface, UserInterface, InvalidUserException} from "@switchit/nestjs-oauth2-server";
import { UserService } from "../user/user.service";
import { ApiResponse, ApiResponseStatus } from "../shared/common";
import { UserDetailsDto } from "../user/dto/user-details.dto";
import { LoginUserDto } from "../user/dto";
import { User } from "../user/entity/user.entity";
 
@Injectable()
export class UserValidator implements UserValidatorInterface {
    

    async validate(userName, password): Promise<UserInterface> {
        let userService = UserService.userService;
        let user:any = await userService.login({userName,password});
        if(user.status == ApiResponseStatus.SUCCESS ){            
            let userInfo:UserInterface = {
                id:user.data.id,
                username:user.data.username,
                email:user.data.email
            }
            return userInfo;
        }
        throw InvalidUserException.withUsernameAndPassword(userName, password);
    }
}