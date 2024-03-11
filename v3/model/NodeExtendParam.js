"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeExtendParam = void 0;
class NodeExtendParam {
    constructor() {
    }
    withEcsPerformancetype(ecsPerformancetype) {
        this['ecs:performancetype'] = ecsPerformancetype;
        return this;
    }
    set ecsPerformancetype(ecsPerformancetype) {
        this['ecs:performancetype'] = ecsPerformancetype;
    }
    get ecsPerformancetype() {
        return this['ecs:performancetype'];
    }
    withOrderID(orderID) {
        this['orderID'] = orderID;
        return this;
    }
    withProductID(productID) {
        this['productID'] = productID;
        return this;
    }
    withMaxPods(maxPods) {
        this['maxPods'] = maxPods;
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
    withDockerLVMConfigOverride(dockerLVMConfigOverride) {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
        return this;
    }
    set dockerLVMConfigOverride(dockerLVMConfigOverride) {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
    }
    get dockerLVMConfigOverride() {
        return this['DockerLVMConfigOverride'];
    }
    withDockerBaseSize(dockerBaseSize) {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    withPublicKey(publicKey) {
        this['publicKey'] = publicKey;
        return this;
    }
    withAlphaCcePreInstall(alphaCcePreInstall) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
        return this;
    }
    set alphaCcePreInstall(alphaCcePreInstall) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    get alphaCcePreInstall() {
        return this['alpha.cce/preInstall'];
    }
    withAlphaCcePostInstall(alphaCcePostInstall) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    set alphaCcePostInstall(alphaCcePostInstall) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    get alphaCcePostInstall() {
        return this['alpha.cce/postInstall'];
    }
    withAlphaCceNodeImageID(alphaCceNodeImageID) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
        return this;
    }
    set alphaCceNodeImageID(alphaCceNodeImageID) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
    }
    get alphaCceNodeImageID() {
        return this['alpha.cce/NodeImageID'];
    }
    withNicMultiqueue(nicMultiqueue) {
        this['nicMultiqueue'] = nicMultiqueue;
        return this;
    }
    withNicThreshold(nicThreshold) {
        this['nicThreshold'] = nicThreshold;
        return this;
    }
    withChargingMode(chargingMode) {
        this['chargingMode'] = chargingMode;
        return this;
    }
    withAgencyName(agencyName) {
        this['agency_name'] = agencyName;
        return this;
    }
    set agencyName(agencyName) {
        this['agency_name'] = agencyName;
    }
    get agencyName() {
        return this['agency_name'];
    }
    withKubeReservedMem(kubeReservedMem) {
        this['kubeReservedMem'] = kubeReservedMem;
        return this;
    }
    withSystemReservedMem(systemReservedMem) {
        this['systemReservedMem'] = systemReservedMem;
        return this;
    }
    withInitNodePassword(initNodePassword) {
        this['init-node-password'] = initNodePassword;
        return this;
    }
    set initNodePassword(initNodePassword) {
        this['init-node-password'] = initNodePassword;
    }
    get initNodePassword() {
        return this['init-node-password'];
    }
}
exports.NodeExtendParam = NodeExtendParam;
//# sourceMappingURL=NodeExtendParam.js.map