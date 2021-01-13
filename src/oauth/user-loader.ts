import {Injectable, Inject} from "@nestjs/common";
import {UserLoaderInterface, UserInterface, InvalidUserException} from "@switchit/nestjs-oauth2-server";
import { UserService } from "../user/user.service";
import { ApiResponseStatus } from "../shared/common";
 
@Injectable()
export class UserLoader implements UserLoaderInterface {

    
    async load(userId: string): Promise<UserInterface> {
        let userDetails:any = await UserService.userService.findById(userId);       
        if(userDetails.status == ApiResponseStatus.SUCCESS ){     
            let userInfo:UserInterface = {
                id:userDetails.data.id,
                username:userDetails.data.username,
                email:userDetails.data.email
            }
            return userInfo;
        }       
        throw InvalidUserException.withId(userId);
    }
}