import { NodePoolCondition } from './NodePoolCondition';
export declare class CreateNodePoolStatus {
    currentNode?: number;
    creatingNode?: number;
    deletingNode?: number;
    phase?: CreateNodePoolStatusPhaseEnum | string;
    conditions?: Array<NodePoolCondition>;
    constructor();
    withCurrentNode(currentNode: number): CreateNodePoolStatus;
    withCreatingNode(creatingNode: number): CreateNodePoolStatus;
    withDeletingNode(deletingNode: number): CreateNodePoolStatus;
    withPhase(phase: CreateNodePoolStatusPhaseEnum | string): CreateNodePoolStatus;
    withConditions(conditions: Array<NodePoolCondition>): CreateNodePoolStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum CreateNodePoolStatusPhaseEnum {
    SYNCHRONIZING = "Synchronizing",
    SYNCHRONIZED = "Synchronized",
    SOLDOUT = "SoldOut",
    DELETING = "Deleting",
    ERROR = "Error"
}
//# sourceMappingURL=CreateNodePoolStatus.d.ts.map