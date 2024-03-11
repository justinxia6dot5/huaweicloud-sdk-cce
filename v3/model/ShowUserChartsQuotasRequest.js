"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserChartsQuotasRequest = void 0;
class ShowUserChartsQuotasRequest {
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
exports.ShowUserChartsQuotasRequest = ShowUserChartsQuotasRequest;
//# sourceMappingURL=ShowUserChartsQuotasRequest.js.map