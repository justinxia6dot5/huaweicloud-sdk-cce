import { Metadata } from './Metadata';
import { PrecheckClusterTask } from './PrecheckClusterTask';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListPreCheckTasksResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: Metadata;
    items?: Array<PrecheckClusterTask>;
    constructor();
    withApiVersion(apiVersion: string): ListPreCheckTasksResponse;
    withKind(kind: string): ListPreCheckTasksResponse;
    withMetadata(metadata: Metadata): ListPreCheckTasksResponse;
    withItems(items: Array<PrecheckClusterTask>): ListPreCheckTasksResponse;
}
//# sourceMappingURL=ListPreCheckTasksResponse.d.ts.map