"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationMetadata = void 0;
class ConfigurationMetadata {
    constructor(name) {
        this['name'] = name;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withLabels(labels) {
        this['labels'] = labels;
        return this;
    }
}
exports.ConfigurationMetadata = ConfigurationMetadata;
//# sourceMappingURL=ConfigurationMetadata.js.map