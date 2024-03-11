"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPassword = void 0;
class UserPassword {
    constructor(password) {
        this['password'] = password;
    }
    withUsername(username) {
        this['username'] = username;
        return this;
    }
    withPassword(password) {
        this['password'] = password;
        return this;
    }
}
exports.UserPassword = UserPassword;
//# sourceMappingURL=UserPassword.js.map