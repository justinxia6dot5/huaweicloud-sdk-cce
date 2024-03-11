import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateNodeResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    status?: NodeStatus;
    constructor();
    withKind(kind: string): CreateNodeResponse;
    withApiVersion(apiVersion: string): CreateNodeResponse;
    withMetadata(metadata: NodeMetadata): CreateNodeResponse;
    withSpec(spec: NodeSpec): CreateNodeResponse;
    withStatus(status: NodeStatus): CreateNodeResponse;
}
//# sourceMappingURL=CreateNodeResponse.d.ts.map