import { NodePriority } from './NodePriority';
import { UpgradeAddonConfig } from './UpgradeAddonConfig';
import { UpgradeStrategy } from './UpgradeStrategy';
export declare class ClusterUpgradeAction {
    addons?: Array<UpgradeAddonConfig>;
    nodeOrder?: {
        [key: string]: Array<NodePriority>;
    };
    nodePoolOrder?: {
        [key: string]: number;
    };
    strategy?: UpgradeStrategy;
    targetVersion?: string;
    constructor(strategy?: UpgradeStrategy, targetVersion?: string);
    withAddons(addons: Array<UpgradeAddonConfig>): ClusterUpgradeAction;
    withNodeOrder(nodeOrder: {
        [key: string]: Array<NodePriority>;
    }): ClusterUpgradeAction;
    withNodePoolOrder(nodePoolOrder: {
        [key: string]: number;
    }): ClusterUpgradeAction;
    withStrategy(strategy: UpgradeStrategy): ClusterUpgradeAction;
    withTargetVersion(targetVersion: string): ClusterUpgradeAction;
}
//# sourceMappingURL=ClusterUpgradeAction.d.ts.map