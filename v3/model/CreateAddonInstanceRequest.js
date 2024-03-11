"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddonInstanceRequest = void 0;
class CreateAddonInstanceRequest {
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
    withBody(body) {
        this['body'] = body;
        return this;
    }
}
exports.CreateAddonInstanceRequest = CreateAddonInstanceRequest;
//# sourceMappingURL=CreateAddonInstanceRequest.js.map