"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterInformationSpec = void 0;
class ClusterInformationSpec {
    constructor() {
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withCustomSan(customSan) {
        this['customSan'] = customSan;
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
    withHostNetwork(hostNetwork) {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
}
exports.ClusterInformationSpec = ClusterInformationSpec;
//# sourceMappingURL=ClusterInformationSpec.js.map