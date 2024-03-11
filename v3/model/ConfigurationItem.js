"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationItem = void 0;
class ConfigurationItem {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withValue(value) {
        this['value'] = value;
        return this;
    }
}
exports.ConfigurationItem = ConfigurationItem;
//# sourceMappingURL=ConfigurationItem.js.map