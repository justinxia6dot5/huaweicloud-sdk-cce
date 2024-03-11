import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowJobResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: JobMetadata;
    spec?: JobSpec;
    status?: JobStatus;
    constructor();
    withKind(kind: string): ShowJobResponse;
    withApiVersion(apiVersion: string): ShowJobResponse;
    withMetadata(metadata: JobMetadata): ShowJobResponse;
    withSpec(spec: JobSpec): ShowJobResponse;
    withStatus(status: JobStatus): ShowJobResponse;
}
//# sourceMappingURL=ShowJobResponse.d.ts.map