import { NodeStageStatus } from './NodeStageStatus';
export declare class NodeCheckStatus {
    phase?: string;
    nodeStageStatus?: Array<NodeStageStatus>;
    constructor();
    withPhase(phase: string): NodeCheckStatus;
    withNodeStageStatus(nodeStageStatus: Array<NodeStageStatus>): NodeCheckStatus;
}
//# sourceMappingURL=NodeCheckStatus.d.ts.map