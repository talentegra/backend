"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUserExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const nestjs_oauth2_server_1 = require("@switchit/nestjs-oauth2-server");
const common_2 = require("../shared/common");
let InvalidUserExceptionFilter = class InvalidUserExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        let invalidCredentialsError = {
            error: {
                type: common_2.ErrorMessageType.ERROR,
                message: "username or password mismatched. Please check"
            },
            status: common_2.ApiResponseStatus.ERROR
        };
        response
            .status(200)
            .json(invalidCredentialsError);
    }
};
InvalidUserExceptionFilter = __decorate([
    common_1.Catch(nestjs_oauth2_server_1.InvalidUserException)
], InvalidUserExceptionFilter);
exports.InvalidUserExceptionFilter = InvalidUserExceptionFilter;
//# sourceMappingURL=InvalidUserExceptionFilter.js.map