import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class DeleteClusterResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: ClusterMetadata;
    spec?: ClusterSpec;
    status?: ClusterStatus;
    constructor();
    withKind(kind: string): DeleteClusterResponse;
    withApiVersion(apiVersion: string): DeleteClusterResponse;
    withMetadata(metadata: ClusterMetadata): DeleteClusterResponse;
    withSpec(spec: ClusterSpec): DeleteClusterResponse;
    withStatus(status: ClusterStatus): DeleteClusterResponse;
}
//# sourceMappingURL=DeleteClusterResponse.d.ts.map