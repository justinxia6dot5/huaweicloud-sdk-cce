import { NodeInfo } from './NodeInfo';
import { PreCheckItemStatus } from './PreCheckItemStatus';
export declare class NodeStageStatus {
    nodeInfo?: NodeInfo;
    itemsStatus?: Array<PreCheckItemStatus>;
    constructor();
    withNodeInfo(nodeInfo: NodeInfo): NodeStageStatus;
    withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): NodeStageStatus;
}
//# sourceMappingURL=NodeStageStatus.d.ts.map