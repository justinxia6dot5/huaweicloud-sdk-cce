"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    constructor() {
    }
    withSshKey(sshKey) {
        this['sshKey'] = sshKey;
        return this;
    }
    withUserPassword(userPassword) {
        this['userPassword'] = userPassword;
        return this;
    }
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map