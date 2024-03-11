"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAddonTemplatesRequest = void 0;
class ListAddonTemplatesRequest {
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
    withAddonTemplateName(addonTemplateName) {
        this['addon_template_name'] = addonTemplateName;
        return this;
    }
    set addonTemplateName(addonTemplateName) {
        this['addon_template_name'] = addonTemplateName;
    }
    get addonTemplateName() {
        return this['addon_template_name'];
    }
}
exports.ListAddonTemplatesRequest = ListAddonTemplatesRequest;
//# sourceMappingURL=ListAddonTemplatesRequest.js.map