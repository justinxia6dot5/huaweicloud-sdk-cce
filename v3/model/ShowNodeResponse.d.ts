import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowNodeResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: NodeMetadata;
    spec?: NodeSpec;
    status?: NodeStatus;
    constructor();
    withKind(kind: string): ShowNodeResponse;
    withApiVersion(apiVersion: string): ShowNodeResponse;
    withMetadata(metadata: NodeMetadata): ShowNodeResponse;
    withSpec(spec: NodeSpec): ShowNodeResponse;
    withStatus(status: NodeStatus): ShowNodeResponse;
}
//# sourceMappingURL=ShowNodeResponse.d.ts.map