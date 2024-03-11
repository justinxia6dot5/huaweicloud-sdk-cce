"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostnameConfigTypeEnum = exports.HostnameConfig = void 0;
class HostnameConfig {
    constructor(type) {
        this['type'] = type;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
}
exports.HostnameConfig = HostnameConfig;
/**
    * @export
    * @enum {string}
    */
var HostnameConfigTypeEnum;
(function (HostnameConfigTypeEnum) {
    HostnameConfigTypeEnum["PRIVATEIP"] = "privateIp";
    HostnameConfigTypeEnum["CCENODENAME"] = "cceNodeName";
})(HostnameConfigTypeEnum = exports.HostnameConfigTypeEnum || (exports.HostnameConfigTypeEnum = {}));
//# sourceMappingURL=HostnameConfig.js.map