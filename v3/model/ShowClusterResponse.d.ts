import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowClusterResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: ClusterMetadata;
    spec?: ClusterSpec;
    status?: ClusterStatus;
    constructor();
    withKind(kind: string): ShowClusterResponse;
    withApiVersion(apiVersion: string): ShowClusterResponse;
    withMetadata(metadata: ClusterMetadata): ShowClusterResponse;
    withSpec(spec: ClusterSpec): ShowClusterResponse;
    withStatus(status: ClusterStatus): ShowClusterResponse;
}
//# sourceMappingURL=ShowClusterResponse.d.ts.map