"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolSpecTypeEnum = exports.NodePoolSpec = void 0;
class NodePoolSpec {
    constructor(nodeTemplate) {
        this['nodeTemplate'] = nodeTemplate;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withNodeTemplate(nodeTemplate) {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    withInitialNodeCount(initialNodeCount) {
        this['initialNodeCount'] = initialNodeCount;
        return this;
    }
    withAutoscaling(autoscaling) {
        this['autoscaling'] = autoscaling;
        return this;
    }
    withNodeManagement(nodeManagement) {
        this['nodeManagement'] = nodeManagement;
        return this;
    }
    withPodSecurityGroups(podSecurityGroups) {
        this['podSecurityGroups'] = podSecurityGroups;
        return this;
    }
    withCustomSecurityGroups(customSecurityGroups) {
        this['customSecurityGroups'] = customSecurityGroups;
        return this;
    }
}
exports.NodePoolSpec = NodePoolSpec;
/**
    * @export
    * @enum {string}
    */
var NodePoolSpecTypeEnum;
(function (NodePoolSpecTypeEnum) {
    NodePoolSpecTypeEnum["VM"] = "vm";
    NodePoolSpecTypeEnum["ELASTICBMS"] = "ElasticBMS";
    NodePoolSpecTypeEnum["PM"] = "pm";
})(NodePoolSpecTypeEnum = exports.NodePoolSpecTypeEnum || (exports.NodePoolSpecTypeEnum = {}));
//# sourceMappingURL=NodePoolSpec.js.map