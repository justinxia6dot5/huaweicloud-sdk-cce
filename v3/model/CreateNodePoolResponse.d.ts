import { CreateNodePoolStatus } from './CreateNodePoolStatus';
import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateNodePoolResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodePoolMetadata;
    spec?: NodePoolSpec;
    status?: CreateNodePoolStatus;
    constructor();
    withKind(kind: string): CreateNodePoolResponse;
    withApiVersion(apiVersion: string): CreateNodePoolResponse;
    withMetadata(metadata: NodePoolMetadata): CreateNodePoolResponse;
    withSpec(spec: NodePoolSpec): CreateNodePoolResponse;
    withStatus(status: CreateNodePoolStatus): CreateNodePoolResponse;
}
//# sourceMappingURL=CreateNodePoolResponse.d.ts.map