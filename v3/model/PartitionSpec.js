"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionSpec = void 0;
class PartitionSpec {
    constructor() {
    }
    withHostNetwork(hostNetwork) {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    withContainerNetwork(containerNetwork) {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    withPublicBorderGroup(publicBorderGroup) {
        this['publicBorderGroup'] = publicBorderGroup;
        return this;
    }
    withCategory(category) {
        this['category'] = category;
        return this;
    }
}
exports.PartitionSpec = PartitionSpec;
//# sourceMappingURL=PartitionSpec.js.map