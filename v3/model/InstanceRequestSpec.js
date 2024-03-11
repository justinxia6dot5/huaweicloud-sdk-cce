"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceRequestSpec = void 0;
class InstanceRequestSpec {
    constructor(clusterID, values, addonTemplateName) {
        this['clusterID'] = clusterID;
        this['values'] = values;
        this['addonTemplateName'] = addonTemplateName;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withClusterID(clusterID) {
        this['clusterID'] = clusterID;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
    withAddonTemplateName(addonTemplateName) {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
}
exports.InstanceRequestSpec = InstanceRequestSpec;
//# sourceMappingURL=InstanceRequestSpec.js.map