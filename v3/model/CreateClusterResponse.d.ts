import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateClusterResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: ClusterMetadata;
    spec?: ClusterSpec;
    status?: ClusterStatus;
    constructor();
    withKind(kind: string): CreateClusterResponse;
    withApiVersion(apiVersion: string): CreateClusterResponse;
    withMetadata(metadata: ClusterMetadata): CreateClusterResponse;
    withSpec(spec: ClusterSpec): CreateClusterResponse;
    withStatus(status: ClusterStatus): CreateClusterResponse;
}
//# sourceMappingURL=CreateClusterResponse.d.ts.map