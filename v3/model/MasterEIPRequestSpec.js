"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterEIPRequestSpecActionEnum = exports.MasterEIPRequestSpec = void 0;
class MasterEIPRequestSpec {
    constructor() {
    }
    withAction(action) {
        this['action'] = action;
        return this;
    }
    withSpec(spec) {
        this['spec'] = spec;
        return this;
    }
    withBandwidth(bandwidth) {
        this['bandwidth'] = bandwidth;
        return this;
    }
    withElasticIp(elasticIp) {
        this['elasticIp'] = elasticIp;
        return this;
    }
}
exports.MasterEIPRequestSpec = MasterEIPRequestSpec;
/**
    * @export
    * @enum {string}
    */
var MasterEIPRequestSpecActionEnum;
(function (MasterEIPRequestSpecActionEnum) {
    MasterEIPRequestSpecActionEnum["BIND"] = "bind";
    MasterEIPRequestSpecActionEnum["UNBIND"] = "unbind";
})(MasterEIPRequestSpecActionEnum = exports.MasterEIPRequestSpecActionEnum || (exports.MasterEIPRequestSpecActionEnum = {}));
//# sourceMappingURL=MasterEIPRequestSpec.js.map