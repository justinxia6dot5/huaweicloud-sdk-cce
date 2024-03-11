"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterEIPResponseSpecActionEnum = exports.MasterEIPResponseSpec = void 0;
class MasterEIPResponseSpec {
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
    withElasticIp(elasticIp) {
        this['elasticIp'] = elasticIp;
        return this;
    }
}
exports.MasterEIPResponseSpec = MasterEIPResponseSpec;
/**
    * @export
    * @enum {string}
    */
var MasterEIPResponseSpecActionEnum;
(function (MasterEIPResponseSpecActionEnum) {
    MasterEIPResponseSpecActionEnum["BIND"] = "bind";
})(MasterEIPResponseSpecActionEnum = exports.MasterEIPResponseSpecActionEnum || (exports.MasterEIPResponseSpecActionEnum = {}));
//# sourceMappingURL=MasterEIPResponseSpec.js.map