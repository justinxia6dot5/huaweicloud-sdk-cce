import { ClusterInformationSpec } from './ClusterInformationSpec';
import { ClusterMetadataForUpdate } from './ClusterMetadataForUpdate';
export declare class ClusterInformation {
    spec?: ClusterInformationSpec;
    metadata?: ClusterMetadataForUpdate;
    constructor(spec?: ClusterInformationSpec);
    withSpec(spec: ClusterInformationSpec): ClusterInformation;
    withMetadata(metadata: ClusterMetadataForUpdate): ClusterInformation;
}
//# sourceMappingURL=ClusterInformation.d.ts.map