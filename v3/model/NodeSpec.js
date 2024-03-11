"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSpec = void 0;
class NodeSpec {
    constructor(flavor, az, login, rootVolume, dataVolumes) {
        this['flavor'] = flavor;
        this['az'] = az;
        this['login'] = login;
        this['rootVolume'] = rootVolume;
        this['dataVolumes'] = dataVolumes;
    }
    withFlavor(flavor) {
        this['flavor'] = flavor;
        return this;
    }
    withAz(az) {
        this['az'] = az;
        return this;
    }
    withOs(os) {
        this['os'] = os;
        return this;
    }
    withLogin(login) {
        this['login'] = login;
        return this;
    }
    withRootVolume(rootVolume) {
        this['rootVolume'] = rootVolume;
        return this;
    }
    withDataVolumes(dataVolumes) {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    withStorage(storage) {
        this['storage'] = storage;
        return this;
    }
    withPublicIP(publicIP) {
        this['publicIP'] = publicIP;
        return this;
    }
    withNodeNicSpec(nodeNicSpec) {
        this['nodeNicSpec'] = nodeNicSpec;
        return this;
    }
    withCount(count) {
        this['count'] = count;
        return this;
    }
    withBillingMode(billingMode) {
        this['billingMode'] = billingMode;
        return this;
    }
    withTaints(taints) {
        this['taints'] = taints;
        return this;
    }
    withK8sTags(k8sTags) {
        this['k8sTags'] = k8sTags;
        return this;
    }
    withEcsGroupId(ecsGroupId) {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    withDedicatedHostId(dedicatedHostId) {
        this['dedicatedHostId'] = dedicatedHostId;
        return this;
    }
    withUserTags(userTags) {
        this['userTags'] = userTags;
        return this;
    }
    withRuntime(runtime) {
        this['runtime'] = runtime;
        return this;
    }
    withInitializedConditions(initializedConditions) {
        this['initializedConditions'] = initializedConditions;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
        return this;
    }
    withHostnameConfig(hostnameConfig) {
        this['hostnameConfig'] = hostnameConfig;
        return this;
    }
}
exports.NodeSpec = NodeSpec;
//# sourceMappingURL=NodeSpec.js.map