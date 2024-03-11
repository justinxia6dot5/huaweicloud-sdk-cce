import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class DeleteNodeResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    status?: NodeStatus;
    constructor();
    withKind(kind: string): DeleteNodeResponse;
    withApiVersion(apiVersion: string): DeleteNodeResponse;
    withMetadata(metadata: NodeMetadata): DeleteNodeResponse;
    withSpec(spec: NodeSpec): DeleteNodeResponse;
    withStatus(status: NodeStatus): DeleteNodeResponse;
}
//# sourceMappingURL=DeleteNodeResponse.d.ts.map