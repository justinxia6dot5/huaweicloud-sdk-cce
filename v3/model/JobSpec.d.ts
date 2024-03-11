import { Job } from './Job';
export declare class JobSpec {
    type?: string;
    clusterUID?: string;
    resourceID?: string;
    resourceName?: string;
    extendParam?: {
        [key: string]: string;
    };
    subJobs?: Array<Job>;
    constructor();
    withType(type: string): JobSpec;
    withClusterUID(clusterUID: string): JobSpec;
    withResourceID(resourceID: string): JobSpec;
    withResourceName(resourceName: string): JobSpec;
    withExtendParam(extendParam: {
        [key: string]: string;
    }): JobSpec;
    withSubJobs(subJobs: Array<Job>): JobSpec;
}
//# sourceMappingURL=JobSpec.d.ts.map