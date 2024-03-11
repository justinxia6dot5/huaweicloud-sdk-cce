"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
class Authentication {
    constructor() {
    }
    withMode(mode) {
        this['mode'] = mode;
        return this;
    }
    withAuthenticatingProxy(authenticatingProxy) {
        this['authenticatingProxy'] = authenticatingProxy;
        return this;
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=Authentication.js.map