import { UserLoaderInterface, UserInterface } from "@switchit/nestjs-oauth2-server";
export declare class UserLoader implements UserLoaderInterface {
    load(userId: string): Promise<UserInterface>;
}
