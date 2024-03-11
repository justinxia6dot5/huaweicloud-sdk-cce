import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeSpecUpdate } from './NodeSpecUpdate';
export declare class NodePoolSpecUpdate {
    nodeTemplate?: NodeSpecUpdate;
    initialNodeCount?: number;
    autoscaling?: NodePoolNodeAutoscaling;
    constructor(nodeTemplate?: NodeSpecUpdate, initialNodeCount?: number, autoscaling?: NodePoolNodeAutoscaling);
    withNodeTemplate(nodeTemplate: NodeSpecUpdate): NodePoolSpecUpdate;
    withInitialNodeCount(initialNodeCount: number): NodePoolSpecUpdate;
    withAutoscaling(autoscaling: NodePoolNodeAutoscaling): NodePoolSpecUpdate;
}
//# sourceMappingURL=NodePoolSpecUpdate.d.ts.map