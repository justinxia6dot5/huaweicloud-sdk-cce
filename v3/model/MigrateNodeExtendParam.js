"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateNodeExtendParam = void 0;
class MigrateNodeExtendParam {
    constructor() {
    }
    withMaxPods(maxPods) {
        this['maxPods'] = maxPods;
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
}
exports.MigrateNodeExtendParam = MigrateNodeExtendParam;
//# sourceMappingURL=MigrateNodeExtendParam.js.map