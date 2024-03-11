"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeAddonConfig = void 0;
class UpgradeAddonConfig {
    constructor(addonTemplateName, operation, version) {
        this['addonTemplateName'] = addonTemplateName;
        this['operation'] = operation;
        this['version'] = version;
    }
    withAddonTemplateName(addonTemplateName) {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    withOperation(operation) {
        this['operation'] = operation;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
}
exports.UpgradeAddonConfig = UpgradeAddonConfig;
//# sourceMappingURL=UpgradeAddonConfig.js.map