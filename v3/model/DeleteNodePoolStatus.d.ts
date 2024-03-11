import { NodePoolCondition } from './NodePoolCondition';
export declare class DeleteNodePoolStatus {
    currentNode?: number;
    creatingNode?: number;
    deletingNode?: number;
    phase?: DeleteNodePoolStatusPhaseEnum | string;
    jobId?: string;
    conditions?: Array<NodePoolCondition>;
    constructor();
    withCurrentNode(currentNode: number): DeleteNodePoolStatus;
    withCreatingNode(creatingNode: number): DeleteNodePoolStatus;
    withDeletingNode(deletingNode: number): DeleteNodePoolStatus;
    withPhase(phase: DeleteNodePoolStatusPhaseEnum | string): DeleteNodePoolStatus;
    withJobId(jobId: string): DeleteNodePoolStatus;
    withConditions(conditions: Array<NodePoolCondition>): DeleteNodePoolStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteNodePoolStatusPhaseEnum {
    SYNCHRONIZING = "Synchronizing",
    SYNCHRONIZED = "Synchronized",
    SOLDOUT = "SoldOut",
    DELETING = "Deleting",
    ERROR = "Error"
}
//# sourceMappingURL=DeleteNodePoolStatus.d.ts.map