"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_oauth2_server_1 = require("@switchit/nestjs-oauth2-server");
const user_service_1 = require("../user/user.service");
const common_2 = require("../shared/common");
let UserValidator = class UserValidator {
    async validate(userName, password) {
        let userService = user_service_1.UserService.userService;
        let user = await userService.login({ userName, password });
        if (user.status == common_2.ApiResponseStatus.SUCCESS) {
            let userInfo = {
                id: user.data.id,
                username: user.data.username,
                email: user.data.email
            };
            return userInfo;
        }
        throw nestjs_oauth2_server_1.InvalidUserException.withUsernameAndPassword(userName, password);
    }
};
UserValidator = __decorate([
    common_1.Injectable()
], UserValidator);
exports.UserValidator = UserValidator;
//# sourceMappingURL=user-validator.js.map