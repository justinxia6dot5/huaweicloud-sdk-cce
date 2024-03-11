"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceSpec = void 0;
class InstanceSpec {
    constructor(clusterID, version, addonTemplateName, addonTemplateType, description, values) {
        this['clusterID'] = clusterID;
        this['version'] = version;
        this['addonTemplateName'] = addonTemplateName;
        this['addonTemplateType'] = addonTemplateType;
        this['description'] = description;
        this['values'] = values;
    }
    withClusterID(clusterID) {
        this['clusterID'] = clusterID;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withAddonTemplateName(addonTemplateName) {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    withAddonTemplateType(addonTemplateType) {
        this['addonTemplateType'] = addonTemplateType;
        return this;
    }
    withAddonTemplateLogo(addonTemplateLogo) {
        this['addonTemplateLogo'] = addonTemplateLogo;
        return this;
    }
    withAddonTemplateLabels(addonTemplateLabels) {
        this['addonTemplateLabels'] = addonTemplateLabels;
        return this;
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
}
exports.InstanceSpec = InstanceSpec;
//# sourceMappingURL=InstanceSpec.js.map