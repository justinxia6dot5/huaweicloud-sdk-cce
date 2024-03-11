import { DeleteNodePoolStatus } from './DeleteNodePoolStatus';
import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class DeleteNodePoolResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: DeleteNodePoolStatus;
    constructor();
    withKind(kind: string): DeleteNodePoolResponse;
    withApiVersion(apiVersion: string): DeleteNodePoolResponse;
    withMetadata(metadata: NodePoolMetadata): DeleteNodePoolResponse;
    withSpec(spec: NodePoolSpec): DeleteNodePoolResponse;
    withStatus(status: DeleteNodePoolStatus): DeleteNodePoolResponse;
}
//# sourceMappingURL=DeleteNodePoolResponse.d.ts.map