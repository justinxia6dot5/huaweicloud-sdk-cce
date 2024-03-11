"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeNameEnum = exports.Runtime = void 0;
class Runtime {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
}
exports.Runtime = Runtime;
/**
    * @export
    * @enum {string}
    */
var RuntimeNameEnum;
(function (RuntimeNameEnum) {
    RuntimeNameEnum["DOCKER"] = "docker";
    RuntimeNameEnum["CONTAINERD"] = "containerd";
})(RuntimeNameEnum = exports.RuntimeNameEnum || (exports.RuntimeNameEnum = {}));
//# sourceMappingURL=Runtime.js.map