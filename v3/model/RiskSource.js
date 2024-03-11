"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskSource = void 0;
class RiskSource {
    constructor() {
    }
    withConfigurationRisks(configurationRisks) {
        this['configurationRisks'] = configurationRisks;
        return this;
    }
    withDeprecatedAPIRisks(deprecatedAPIRisks) {
        this['deprecatedAPIRisks'] = deprecatedAPIRisks;
        return this;
    }
    withNodeRisks(nodeRisks) {
        this['nodeRisks'] = nodeRisks;
        return this;
    }
    withAddonRisks(addonRisks) {
        this['addonRisks'] = addonRisks;
        return this;
    }
}
exports.RiskSource = RiskSource;
//# sourceMappingURL=RiskSource.js.map