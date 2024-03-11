import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';
export declare class Job {
    kind?: string;
    apiVersion?: string;
    metadata?: JobMetadata;
    spec?: JobSpec;
    status?: JobStatus;
    constructor();
    withKind(kind: string): Job;
    withApiVersion(apiVersion: string): Job;
    withMetadata(metadata: JobMetadata): Job;
    withSpec(spec: JobSpec): Job;
    withStatus(status: JobStatus): Job;
}
//# sourceMappingURL=Job.d.ts.map