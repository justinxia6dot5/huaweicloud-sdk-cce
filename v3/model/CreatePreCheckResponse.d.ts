import { PrecheckCluserResponseMetadata } from './PrecheckCluserResponseMetadata';
import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreatePreCheckResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: PrecheckCluserResponseMetadata;
    spec?: PrecheckSpec;
    status?: PrecheckStatus;
    constructor();
    withApiVersion(apiVersion: string): CreatePreCheckResponse;
    withKind(kind: string): CreatePreCheckResponse;
    withMetadata(metadata: PrecheckCluserResponseMetadata): CreatePreCheckResponse;
    withSpec(spec: PrecheckSpec): CreatePreCheckResponse;
    withStatus(status: PrecheckStatus): CreatePreCheckResponse;
}
//# sourceMappingURL=CreatePreCheckResponse.d.ts.map