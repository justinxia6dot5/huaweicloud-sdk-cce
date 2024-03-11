import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { UpdateNodePoolStatus } from './UpdateNodePoolStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateNodePoolResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: UpdateNodePoolStatus;
    constructor();
    withKind(kind: string): UpdateNodePoolResponse;
    withApiVersion(apiVersion: string): UpdateNodePoolResponse;
    withMetadata(metadata: NodePoolMetadata): UpdateNodePoolResponse;
    withSpec(spec: NodePoolSpec): UpdateNodePoolResponse;
    withStatus(status: UpdateNodePoolStatus): UpdateNodePoolResponse;
}
//# sourceMappingURL=UpdateNodePoolResponse.d.ts.map