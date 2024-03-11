"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceSelectorOperatorEnum = exports.ResourceSelectorKeyEnum = exports.ResourceSelector = void 0;
class ResourceSelector {
    constructor(key, operator) {
        this['key'] = key;
        this['operator'] = operator;
    }
    withKey(key) {
        this['key'] = key;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
    withOperator(operator) {
        this['operator'] = operator;
        return this;
    }
}
exports.ResourceSelector = ResourceSelector;
/**
    * @export
    * @enum {string}
    */
var ResourceSelectorKeyEnum;
(function (ResourceSelectorKeyEnum) {
    ResourceSelectorKeyEnum["NODE_UID"] = "node.uid";
})(ResourceSelectorKeyEnum = exports.ResourceSelectorKeyEnum || (exports.ResourceSelectorKeyEnum = {}));
/**
    * @export
    * @enum {string}
    */
var ResourceSelectorOperatorEnum;
(function (ResourceSelectorOperatorEnum) {
    ResourceSelectorOperatorEnum["IN"] = "In";
})(ResourceSelectorOperatorEnum = exports.ResourceSelectorOperatorEnum || (exports.ResourceSelectorOperatorEnum = {}));
//# sourceMappingURL=ResourceSelector.js.map