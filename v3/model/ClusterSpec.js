"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterSpecKubeProxyModeEnum = exports.ClusterSpecTypeEnum = exports.ClusterSpecCategoryEnum = exports.ClusterSpec = void 0;
class ClusterSpec {
    constructor(flavor, hostNetwork, containerNetwork) {
        this['flavor'] = flavor;
        this['hostNetwork'] = hostNetwork;
        this['containerNetwork'] = containerNetwork;
    }
    withCategory(category) {
        this['category'] = category;
        return this;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withFlavor(flavor) {
        this['flavor'] = flavor;
        return this;
    }
    withEnableAutopilot(enableAutopilot) {
        this['enableAutopilot'] = enableAutopilot;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withPlatformVersion(platformVersion) {
        this['platformVersion'] = platformVersion;
        return this;
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withCustomSan(customSan) {
        this['customSan'] = customSan;
        return this;
    }
    withIpv6enable(ipv6enable) {
        this['ipv6enable'] = ipv6enable;
        return this;
    }
    withHostNetwork(hostNetwork) {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    withContainerNetwork(containerNetwork) {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    withEniNetwork(eniNetwork) {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
    withServiceNetwork(serviceNetwork) {
        this['serviceNetwork'] = serviceNetwork;
        return this;
    }
    withAuthentication(authentication) {
        this['authentication'] = authentication;
        return this;
    }
    withBillingMode(billingMode) {
        this['billingMode'] = billingMode;
        return this;
    }
    withMasters(masters) {
        this['masters'] = masters;
        return this;
    }
    withKubernetesSvcIpRange(kubernetesSvcIpRange) {
        this['kubernetesSvcIpRange'] = kubernetesSvcIpRange;
        return this;
    }
    withClusterTags(clusterTags) {
        this['clusterTags'] = clusterTags;
        return this;
    }
    withKubeProxyMode(kubeProxyMode) {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    withAz(az) {
        this['az'] = az;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
        return this;
    }
    withSupportIstio(supportIstio) {
        this['supportIstio'] = supportIstio;
        return this;
    }
    withEnableMasterVolumeEncryption(enableMasterVolumeEncryption) {
        this['enableMasterVolumeEncryption'] = enableMasterVolumeEncryption;
        return this;
    }
    withConfigurationsOverride(configurationsOverride) {
        this['configurationsOverride'] = configurationsOverride;
        return this;
    }
}
exports.ClusterSpec = ClusterSpec;
/**
    * @export
    * @enum {string}
    */
var ClusterSpecCategoryEnum;
(function (ClusterSpecCategoryEnum) {
    ClusterSpecCategoryEnum["CCE"] = "CCE";
    ClusterSpecCategoryEnum["TURBO"] = "Turbo";
})(ClusterSpecCategoryEnum = exports.ClusterSpecCategoryEnum || (exports.ClusterSpecCategoryEnum = {}));
/**
    * @export
    * @enum {string}
    */
var ClusterSpecTypeEnum;
(function (ClusterSpecTypeEnum) {
    ClusterSpecTypeEnum["VIRTUALMACHINE"] = "VirtualMachine";
    ClusterSpecTypeEnum["ARM64"] = "ARM64";
})(ClusterSpecTypeEnum = exports.ClusterSpecTypeEnum || (exports.ClusterSpecTypeEnum = {}));
/**
    * @export
    * @enum {string}
    */
var ClusterSpecKubeProxyModeEnum;
(function (ClusterSpecKubeProxyModeEnum) {
    ClusterSpecKubeProxyModeEnum["IPTABLES"] = "iptables";
    ClusterSpecKubeProxyModeEnum["IPVS"] = "ipvs";
})(ClusterSpecKubeProxyModeEnum = exports.ClusterSpecKubeProxyModeEnum || (exports.ClusterSpecKubeProxyModeEnum = {}));
//# sourceMappingURL=ClusterSpec.js.map