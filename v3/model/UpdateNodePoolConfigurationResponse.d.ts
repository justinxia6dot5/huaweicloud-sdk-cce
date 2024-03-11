import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateNodePoolConfigurationResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: ConfigurationMetadata;
    spec?: ClusterConfigurationsSpec;
    status?: object;
    constructor();
    withApiVersion(apiVersion: string): UpdateNodePoolConfigurationResponse;
    withKind(kind: string): UpdateNodePoolConfigurationResponse;
    withMetadata(metadata: ConfigurationMetadata): UpdateNodePoolConfigurationResponse;
    withSpec(spec: ClusterConfigurationsSpec): UpdateNodePoolConfigurationResponse;
    withStatus(status: object): UpdateNodePoolConfigurationResponse;
}
//# sourceMappingURL=UpdateNodePoolConfigurationResponse.d.ts.map