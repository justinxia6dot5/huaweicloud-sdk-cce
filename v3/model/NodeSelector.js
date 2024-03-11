"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSelector = void 0;
class NodeSelector {
    constructor(key, operator) {
        this['key'] = key;
        this['operator'] = operator;
    }
    withKey(key) {
        this['key'] = key;
        return this;
    }
    withValue(value) {
        this['value'] = value;
        return this;
    }
    withOperator(operator) {
        this['operator'] = operator;
        return this;
    }
}
exports.NodeSelector = NodeSelector;
//# sourceMappingURL=NodeSelector.js.map