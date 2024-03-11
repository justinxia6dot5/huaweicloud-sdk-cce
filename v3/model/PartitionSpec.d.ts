import { PartitionSpecContainerNetwork } from './PartitionSpecContainerNetwork';
import { PartitionSpecHostNetwork } from './PartitionSpecHostNetwork';
export declare class PartitionSpec {
    hostNetwork?: PartitionSpecHostNetwork;
    containerNetwork?: Array<PartitionSpecContainerNetwork>;
    publicBorderGroup?: string;
    category?: string;
    constructor();
    withHostNetwork(hostNetwork: PartitionSpecHostNetwork): PartitionSpec;
    withContainerNetwork(containerNetwork: Array<PartitionSpecContainerNetwork>): PartitionSpec;
    withPublicBorderGroup(publicBorderGroup: string): PartitionSpec;
    withCategory(category: string): PartitionSpec;
}
//# sourceMappingURL=PartitionSpec.d.ts.map