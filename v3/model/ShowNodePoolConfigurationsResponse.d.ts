import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowNodePoolConfigurationsResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: ConfigurationMetadata;
    spec?: ClusterConfigurationsSpec;
    status?: object;
    constructor();
    withApiVersion(apiVersion: string): ShowNodePoolConfigurationsResponse;
    withKind(kind: string): ShowNodePoolConfigurationsResponse;
    withMetadata(metadata: ConfigurationMetadata): ShowNodePoolConfigurationsResponse;
    withSpec(spec: ClusterConfigurationsSpec): ShowNodePoolConfigurationsResponse;
    withStatus(status: object): ShowNodePoolConfigurationsResponse;
}
//# sourceMappingURL=ShowNodePoolConfigurationsResponse.d.ts.map