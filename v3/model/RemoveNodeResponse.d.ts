import { RemoveNodesSpec } from './RemoveNodesSpec';
import { TaskStatus } from './TaskStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class RemoveNodeResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    spec?: RemoveNodesSpec;
    status?: TaskStatus;
    constructor();
    withApiVersion(apiVersion: string): RemoveNodeResponse;
    withKind(kind: string): RemoveNodeResponse;
    withSpec(spec: RemoveNodesSpec): RemoveNodeResponse;
    withStatus(status: TaskStatus): RemoveNodeResponse;
}
//# sourceMappingURL=RemoveNodeResponse.d.ts.map