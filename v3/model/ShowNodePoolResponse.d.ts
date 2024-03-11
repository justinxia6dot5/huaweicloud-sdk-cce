import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowNodePoolResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: NodePoolStatus;
    constructor();
    withKind(kind: string): ShowNodePoolResponse;
    withApiVersion(apiVersion: string): ShowNodePoolResponse;
    withMetadata(metadata: NodePoolMetadata): ShowNodePoolResponse;
    withSpec(spec: NodePoolSpec): ShowNodePoolResponse;
    withStatus(status: NodePoolStatus): ShowNodePoolResponse;
}
//# sourceMappingURL=ShowNodePoolResponse.d.ts.map