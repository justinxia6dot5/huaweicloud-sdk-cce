"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterCert = void 0;
class ClusterCert {
    constructor() {
    }
    withServer(server) {
        this['server'] = server;
        return this;
    }
    withCertificateAuthorityData(certificateAuthorityData) {
        this['certificate-authority-data'] = certificateAuthorityData;
        return this;
    }
    set certificateAuthorityData(certificateAuthorityData) {
        this['certificate-authority-data'] = certificateAuthorityData;
    }
    get certificateAuthorityData() {
        return this['certificate-authority-data'];
    }
    withInsecureSkipTlsVerify(insecureSkipTlsVerify) {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
        return this;
    }
    set insecureSkipTlsVerify(insecureSkipTlsVerify) {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
    }
    get insecureSkipTlsVerify() {
        return this['insecure-skip-tls-verify'];
    }
}
exports.ClusterCert = ClusterCert;
//# sourceMappingURL=ClusterCert.js.map