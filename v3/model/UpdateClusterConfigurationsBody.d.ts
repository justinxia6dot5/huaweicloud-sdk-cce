import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';
export declare class UpdateClusterConfigurationsBody {
    apiVersion?: string;
    kind?: string;
    metadata?: ConfigurationMetadata;
    spec?: ClusterConfigurationsSpec;
    constructor(apiVersion?: string, kind?: string, metadata?: ConfigurationMetadata, spec?: ClusterConfigurationsSpec);
    withApiVersion(apiVersion: string): UpdateClusterConfigurationsBody;
    withKind(kind: string): UpdateClusterConfigurationsBody;
    withMetadata(metadata: ConfigurationMetadata): UpdateClusterConfigurationsBody;
    withSpec(spec: ClusterConfigurationsSpec): UpdateClusterConfigurationsBody;
}
//# sourceMappingURL=UpdateClusterConfigurationsBody.d.ts.map