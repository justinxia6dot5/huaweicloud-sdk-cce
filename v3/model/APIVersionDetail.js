"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIVersionDetailStatusEnum = exports.APIVersionDetail = void 0;
class APIVersionDetail {
    constructor(id, links, minVersion, status, updated, version) {
        this['id'] = id;
        this['links'] = links;
        this['min_version'] = minVersion;
        this['status'] = status;
        this['updated'] = updated;
        this['version'] = version;
    }
    withId(id) {
        this['id'] = id;
        return this;
    }
    withLinks(links) {
        this['links'] = links;
        return this;
    }
    withMinVersion(minVersion) {
        this['min_version'] = minVersion;
        return this;
    }
    set minVersion(minVersion) {
        this['min_version'] = minVersion;
    }
    get minVersion() {
        return this['min_version'];
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withUpdated(updated) {
        this['updated'] = updated;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
}
exports.APIVersionDetail = APIVersionDetail;
/**
    * @export
    * @enum {string}
    */
var APIVersionDetailStatusEnum;
(function (APIVersionDetailStatusEnum) {
    APIVersionDetailStatusEnum["CURRENT"] = "CURRENT";
    APIVersionDetailStatusEnum["SUPPORTED"] = "SUPPORTED";
    APIVersionDetailStatusEnum["DEPRECATED"] = "DEPRECATED";
})(APIVersionDetailStatusEnum = exports.APIVersionDetailStatusEnum || (exports.APIVersionDetailStatusEnum = {}));
//# sourceMappingURL=APIVersionDetail.js.map