import { ClusterInformationSpecHostNetwork } from './ClusterInformationSpecHostNetwork';
import { ContainerNetworkUpdate } from './ContainerNetworkUpdate';
import { EniNetworkUpdate } from './EniNetworkUpdate';
export declare class ClusterInformationSpec {
    description?: string;
    customSan?: Array<string>;
    containerNetwork?: ContainerNetworkUpdate;
    eniNetwork?: EniNetworkUpdate;
    hostNetwork?: ClusterInformationSpecHostNetwork;
    constructor();
    withDescription(description: string): ClusterInformationSpec;
    withCustomSan(customSan: Array<string>): ClusterInformationSpec;
    withContainerNetwork(containerNetwork: ContainerNetworkUpdate): ClusterInformationSpec;
    withEniNetwork(eniNetwork: EniNetworkUpdate): ClusterInformationSpec;
    withHostNetwork(hostNetwork: ClusterInformationSpecHostNetwork): ClusterInformationSpec;
}
//# sourceMappingURL=ClusterInformationSpec.d.ts.map