import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { InvalidUserException } from "@switchit/nestjs-oauth2-server";
export declare class InvalidUserExceptionFilter implements ExceptionFilter {
    catch(exception: InvalidUserException, host: ArgumentsHost): void;
}
