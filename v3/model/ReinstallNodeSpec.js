"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallNodeSpec = void 0;
class ReinstallNodeSpec {
    constructor(os, login) {
        this['os'] = os;
        this['login'] = login;
    }
    withOs(os) {
        this['os'] = os;
        return this;
    }
    withLogin(login) {
        this['login'] = login;
        return this;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withServerConfig(serverConfig) {
        this['serverConfig'] = serverConfig;
        return this;
    }
    withVolumeConfig(volumeConfig) {
        this['volumeConfig'] = volumeConfig;
        return this;
    }
    withRuntimeConfig(runtimeConfig) {
        this['runtimeConfig'] = runtimeConfig;
        return this;
    }
    withK8sOptions(k8sOptions) {
        this['k8sOptions'] = k8sOptions;
        return this;
    }
    withLifecycle(lifecycle) {
        this['lifecycle'] = lifecycle;
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
exports.ReinstallNodeSpec = ReinstallNodeSpec;
//# sourceMappingURL=ReinstallNodeSpec.js.map