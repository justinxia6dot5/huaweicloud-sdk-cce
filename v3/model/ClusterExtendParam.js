"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterExtendParam = void 0;
class ClusterExtendParam {
    constructor() {
    }
    withClusterAZ(clusterAZ) {
        this['clusterAZ'] = clusterAZ;
        return this;
    }
    withDssMasterVolumes(dssMasterVolumes) {
        this['dssMasterVolumes'] = dssMasterVolumes;
        return this;
    }
    withEnterpriseProjectId(enterpriseProjectId) {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    withKubeProxyMode(kubeProxyMode) {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    withClusterExternalIP(clusterExternalIP) {
        this['clusterExternalIP'] = clusterExternalIP;
        return this;
    }
    withAlphaCceFixPoolMask(alphaCceFixPoolMask) {
        this['alpha.cce/fixPoolMask'] = alphaCceFixPoolMask;
        return this;
    }
    set alphaCceFixPoolMask(alphaCceFixPoolMask) {
        this['alpha.cce/fixPoolMask'] = alphaCceFixPoolMask;
    }
    get alphaCceFixPoolMask() {
        return this['alpha.cce/fixPoolMask'];
    }
    withDecMasterFlavor(decMasterFlavor) {
        this['decMasterFlavor'] = decMasterFlavor;
        return this;
    }
    withDockerUmaskMode(dockerUmaskMode) {
        this['dockerUmaskMode'] = dockerUmaskMode;
        return this;
    }
    withKubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy) {
        this['kubernetes.io/cpuManagerPolicy'] = kubernetesIoCpuManagerPolicy;
        return this;
    }
    set kubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy) {
        this['kubernetes.io/cpuManagerPolicy'] = kubernetesIoCpuManagerPolicy;
    }
    get kubernetesIoCpuManagerPolicy() {
        return this['kubernetes.io/cpuManagerPolicy'];
    }
    withOrderID(orderID) {
        this['orderID'] = orderID;
        return this;
    }
    withPeriodType(periodType) {
        this['periodType'] = periodType;
        return this;
    }
    withPeriodNum(periodNum) {
        this['periodNum'] = periodNum;
        return this;
    }
    withIsAutoRenew(isAutoRenew) {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    withIsAutoPay(isAutoPay) {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    withUpgradefrom(upgradefrom) {
        this['upgradefrom'] = upgradefrom;
        return this;
    }
}
exports.ClusterExtendParam = ClusterExtendParam;
//# sourceMappingURL=ClusterExtendParam.js.map