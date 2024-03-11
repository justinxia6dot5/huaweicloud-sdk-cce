"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatingProxy = void 0;
class AuthenticatingProxy {
    constructor() {
    }
    withCa(ca) {
        this['ca'] = ca;
        return this;
    }
    withCert(cert) {
        this['cert'] = cert;
        return this;
    }
    withPrivateKey(privateKey) {
        this['privateKey'] = privateKey;
        return this;
    }
}
exports.AuthenticatingProxy = AuthenticatingProxy;
//# sourceMappingURL=AuthenticatingProxy.js.map