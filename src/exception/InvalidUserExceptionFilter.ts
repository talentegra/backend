import { ExceptionFilter, ArgumentsHost, Catch } from "@nestjs/common";
import { InvalidUserException } from "@switchit/nestjs-oauth2-server";
import { Request, Response } from 'express';
import { ApiResponseStatus, ApiResponse, ErrorMessageType } from "src/shared/common";

@Catch(InvalidUserException)
export class InvalidUserExceptionFilter implements ExceptionFilter{
    catch(exception: InvalidUserException, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        let invalidCredentialsError:ApiResponse<any> = {
            error:{
                type:ErrorMessageType.ERROR,
                message:"username or password mismatched. Please check"
            },
            status:ApiResponseStatus.ERROR
        };

        response
        .status(200)
        .json(invalidCredentialsError);
    } 
}