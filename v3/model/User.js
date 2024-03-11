"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
    }
    withClientCertificateData(clientCertificateData) {
        this['client-certificate-data'] = clientCertificateData;
        return this;
    }
    set clientCertificateData(clientCertificateData) {
        this['client-certificate-data'] = clientCertificateData;
    }
    get clientCertificateData() {
        return this['client-certificate-data'];
    }
    withClientKeyData(clientKeyData) {
        this['client-key-data'] = clientKeyData;
        return this;
    }
    set clientKeyData(clientKeyData) {
        this['client-key-data'] = clientKeyData;
    }
    get clientKeyData() {
        return this['client-key-data'];
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map