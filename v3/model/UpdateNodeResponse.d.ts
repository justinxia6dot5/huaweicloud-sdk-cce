import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateNodeResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    status?: NodeStatus;
    constructor();
    withKind(kind: string): UpdateNodeResponse;
    withApiVersion(apiVersion: string): UpdateNodeResponse;
    withMetadata(metadata: NodeMetadata): UpdateNodeResponse;
    withSpec(spec: NodeSpec): UpdateNodeResponse;
    withStatus(status: NodeStatus): UpdateNodeResponse;
}
//# sourceMappingURL=UpdateNodeResponse.d.ts.map