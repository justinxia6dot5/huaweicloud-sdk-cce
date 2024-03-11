import { MigrateNodesSpec } from './MigrateNodesSpec';
import { TaskStatus } from './TaskStatus';
export declare class MigrateNodesTask {
    apiVersion?: string;
    kind?: string;
    spec?: MigrateNodesSpec;
    status?: TaskStatus;
    constructor(spec?: MigrateNodesSpec);
    withApiVersion(apiVersion: string): MigrateNodesTask;
    withKind(kind: string): MigrateNodesTask;
    withSpec(spec: MigrateNodesSpec): MigrateNodesTask;
    withStatus(status: TaskStatus): MigrateNodesTask;
}
//# sourceMappingURL=MigrateNodesTask.d.ts.map