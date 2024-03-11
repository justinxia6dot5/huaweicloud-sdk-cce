import { NodePoolCondition } from './NodePoolCondition';
export declare class NodePoolStatus {
    currentNode?: number;
    creatingNode?: number;
    deletingNode?: number;
    phase?: NodePoolStatusPhaseEnum | string;
    jobId?: string;
    conditions?: Array<NodePoolCondition>;
    constructor();
    withCurrentNode(currentNode: number): NodePoolStatus;
    withCreatingNode(creatingNode: number): NodePoolStatus;
    withDeletingNode(deletingNode: number): NodePoolStatus;
    withPhase(phase: NodePoolStatusPhaseEnum | string): NodePoolStatus;
    withJobId(jobId: string): NodePoolStatus;
    withConditions(conditions: Array<NodePoolCondition>): NodePoolStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum NodePoolStatusPhaseEnum {
    SYNCHRONIZING = "Synchronizing",
    SYNCHRONIZED = "Synchronized",
    SOLDOUT = "SoldOut",
    DELETING = "Deleting",
    ERROR = "Error"
}
//# sourceMappingURL=NodePoolStatus.d.ts.map