"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowQuotasRequest = void 0;
class ShowQuotasRequest {
    constructor(contentType) {
        this['Content-Type'] = contentType;
    }
    withContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }
    set contentType(contentType) {
        this['Content-Type'] = contentType;
    }
    get contentType() {
        return this['Content-Type'];
    }
}
exports.ShowQuotasRequest = ShowQuotasRequest;
//# sourceMappingURL=ShowQuotasRequest.js.map