import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { PrecheckTaskMetadata } from './PrecheckTaskMetadata';
export declare class PrecheckClusterTask {
    apiVersion?: string;
    kind?: string;
    metadata?: PrecheckTaskMetadata;
    spec?: PrecheckSpec;
    status?: PrecheckStatus;
    constructor();
    withApiVersion(apiVersion: string): PrecheckClusterTask;
    withKind(kind: string): PrecheckClusterTask;
    withMetadata(metadata: PrecheckTaskMetadata): PrecheckClusterTask;
    withSpec(spec: PrecheckSpec): PrecheckClusterTask;
    withStatus(status: PrecheckStatus): PrecheckClusterTask;
}
//# sourceMappingURL=PrecheckClusterTask.d.ts.map