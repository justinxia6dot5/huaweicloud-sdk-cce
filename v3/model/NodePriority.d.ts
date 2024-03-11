import { NodeSelector } from './NodeSelector';
export declare class NodePriority {
    nodeSelector?: NodeSelector;
    priority?: number;
    constructor(nodeSelector?: NodeSelector, priority?: number);
    withNodeSelector(nodeSelector: NodeSelector): NodePriority;
    withPriority(priority: number): NodePriority;
}
//# sourceMappingURL=NodePriority.d.ts.map