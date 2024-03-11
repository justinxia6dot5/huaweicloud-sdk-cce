import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { PrecheckTaskMetadata } from './PrecheckTaskMetadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowPreCheckResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: PrecheckTaskMetadata;
    spec?: PrecheckSpec;
    status?: PrecheckStatus;
    constructor();
    withApiVersion(apiVersion: string): ShowPreCheckResponse;
    withKind(kind: string): ShowPreCheckResponse;
    withMetadata(metadata: PrecheckTaskMetadata): ShowPreCheckResponse;
    withSpec(spec: PrecheckSpec): ShowPreCheckResponse;
    withStatus(status: PrecheckStatus): ShowPreCheckResponse;
}
//# sourceMappingURL=ShowPreCheckResponse.d.ts.map