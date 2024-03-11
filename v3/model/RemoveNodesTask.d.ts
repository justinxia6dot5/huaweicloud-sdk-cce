import { RemoveNodesSpec } from './RemoveNodesSpec';
import { TaskStatus } from './TaskStatus';
export declare class RemoveNodesTask {
    apiVersion?: string;
    kind?: string;
    spec?: RemoveNodesSpec;
    status?: TaskStatus;
    constructor(spec?: RemoveNodesSpec);
    withApiVersion(apiVersion: string): RemoveNodesTask;
    withKind(kind: string): RemoveNodesTask;
    withSpec(spec: RemoveNodesSpec): RemoveNodesTask;
    withStatus(status: TaskStatus): RemoveNodesTask;
}
//# sourceMappingURL=RemoveNodesTask.d.ts.map