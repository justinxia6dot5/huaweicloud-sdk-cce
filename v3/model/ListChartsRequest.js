"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListChartsRequest = void 0;
class ListChartsRequest {
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
exports.ListChartsRequest = ListChartsRequest;
//# sourceMappingURL=ListChartsRequest.js.map