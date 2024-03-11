"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIVersionLinkRelEnum = exports.APIVersionLink = void 0;
class APIVersionLink {
    constructor(href, rel) {
        this['href'] = href;
        this['rel'] = rel;
    }
    withHref(href) {
        this['href'] = href;
        return this;
    }
    withRel(rel) {
        this['rel'] = rel;
        return this;
    }
}
exports.APIVersionLink = APIVersionLink;
/**
    * @export
    * @enum {string}
    */
var APIVersionLinkRelEnum;
(function (APIVersionLinkRelEnum) {
    APIVersionLinkRelEnum["SELF"] = "self";
})(APIVersionLinkRelEnum = exports.APIVersionLinkRelEnum || (exports.APIVersionLinkRelEnum = {}));
//# sourceMappingURL=APIVersionLink.js.map