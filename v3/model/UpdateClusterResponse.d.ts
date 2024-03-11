import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateClusterResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: ClusterMetadata;
    spec?: ClusterSpec;
    status?: ClusterStatus;
    constructor();
    withKind(kind: string): UpdateClusterResponse;
    withApiVersion(apiVersion: string): UpdateClusterResponse;
    withMetadata(metadata: ClusterMetadata): UpdateClusterResponse;
    withSpec(spec: ClusterSpec): UpdateClusterResponse;
    withStatus(status: ClusterStatus): UpdateClusterResponse;
}
//# sourceMappingURL=UpdateClusterResponse.d.ts.map