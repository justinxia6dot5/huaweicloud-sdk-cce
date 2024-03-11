"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddonInstanceRequest = void 0;
class UpdateAddonInstanceRequest {
    constructor(id, contentType) {
        this['id'] = id;
        this['Content-Type'] = contentType;
    }
    withId(id) {
        this['id'] = id;
        return this;
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
exports.UpdateAddonInstanceRequest = UpdateAddonInstanceRequest;
//# sourceMappingURL=UpdateAddonInstanceRequest.js.map