import { SnapshotSpec } from './SnapshotSpec';
import { SnapshotStatus } from './SnapshotStatus';
import { SnapshotTaskMetadata } from './SnapshotTaskMetadata';
export declare class SnapshotTask {
    kind?: string;
    apiVersion?: string;
    metadata?: SnapshotTaskMetadata;
    spec?: SnapshotSpec;
    status?: SnapshotStatus;
    constructor();
    withKind(kind: string): SnapshotTask;
    withApiVersion(apiVersion: string): SnapshotTask;
    withMetadata(metadata: SnapshotTaskMetadata): SnapshotTask;
    withSpec(spec: SnapshotSpec): SnapshotTask;
    withStatus(status: SnapshotStatus): SnapshotTask;
}
//# sourceMappingURL=SnapshotTask.d.ts.map