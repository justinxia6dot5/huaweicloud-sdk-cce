"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSpecUpdate = void 0;
class NodeSpecUpdate {
    constructor(taints, k8sTags, userTags) {
        this['taints'] = taints;
        this['k8sTags'] = k8sTags;
        this['userTags'] = userTags;
    }
    withTaints(taints) {
        this['taints'] = taints;
        return this;
    }
    withK8sTags(k8sTags) {
        this['k8sTags'] = k8sTags;
        return this;
    }
    withUserTags(userTags) {
        this['userTags'] = userTags;
        return this;
    }
    withInitializedConditions(initializedConditions) {
        this['initializedConditions'] = initializedConditions;
        return this;
    }
    withLogin(login) {
        this['login'] = login;
        return this;
    }
}
exports.NodeSpecUpdate = NodeSpecUpdate;
//# sourceMappingURL=NodeSpecUpdate.js.map