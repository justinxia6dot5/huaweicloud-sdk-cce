import { NodePoolCondition } from './NodePoolCondition';
export declare class UpdateNodePoolStatus {
    currentNode?: number;
    creatingNode?: number;
    deletingNode?: number;
    phase?: UpdateNodePoolStatusPhaseEnum | string;
    conditions?: Array<NodePoolCondition>;
    constructor();
    withCurrentNode(currentNode: number): UpdateNodePoolStatus;
    withCreatingNode(creatingNode: number): UpdateNodePoolStatus;
    withDeletingNode(deletingNode: number): UpdateNodePoolStatus;
    withPhase(phase: UpdateNodePoolStatusPhaseEnum | string): UpdateNodePoolStatus;
    withConditions(conditions: Array<NodePoolCondition>): UpdateNodePoolStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum UpdateNodePoolStatusPhaseEnum {
    SYNCHRONIZING = "Synchronizing",
    SYNCHRONIZED = "Synchronized",
    SOLDOUT = "SoldOut",
    DELETING = "Deleting",
    ERROR = "Error"
}
//# sourceMappingURL=UpdateNodePoolStatus.d.ts.map