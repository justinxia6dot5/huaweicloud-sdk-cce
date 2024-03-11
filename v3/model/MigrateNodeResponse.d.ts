import { MigrateNodesSpec } from './MigrateNodesSpec';
import { TaskStatus } from './TaskStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class MigrateNodeResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    spec?: MigrateNodesSpec;
    status?: TaskStatus;
    constructor();
    withApiVersion(apiVersion: string): MigrateNodeResponse;
    withKind(kind: string): MigrateNodeResponse;
    withSpec(spec: MigrateNodesSpec): MigrateNodeResponse;
    withStatus(status: TaskStatus): MigrateNodeResponse;
}
//# sourceMappingURL=MigrateNodeResponse.d.ts.map