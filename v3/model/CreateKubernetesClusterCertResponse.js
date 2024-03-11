"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateKubernetesClusterCertResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class CreateKubernetesClusterCertResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withPreferences(preferences) {
        this['preferences'] = preferences;
        return this;
    }
    withClusters(clusters) {
        this['clusters'] = clusters;
        return this;
    }
    withUsers(users) {
        this['users'] = users;
        return this;
    }
    withContexts(contexts) {
        this['contexts'] = contexts;
        return this;
    }
    withCurrentContext(currentContext) {
        this['current-context'] = currentContext;
        return this;
    }
    set currentContext(currentContext) {
        this['current-context'] = currentContext;
    }
    get currentContext() {
        return this['current-context'];
    }
    withPortID(portID) {
        this['Port-ID'] = portID;
        return this;
    }
    set portID(portID) {
        this['Port-ID'] = portID;
    }
    get portID() {
        return this['Port-ID'];
    }
}
exports.CreateKubernetesClusterCertResponse = CreateKubernetesClusterCertResponse;
//# sourceMappingURL=CreateKubernetesClusterCertResponse.js.map