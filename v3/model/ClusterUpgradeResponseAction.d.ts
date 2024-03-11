import { UpgradeStrategy } from './UpgradeStrategy';
export declare class ClusterUpgradeResponseAction {
    version?: string;
    targetVersion?: string;
    targetPlatformVersion?: string;
    strategy?: UpgradeStrategy;
    config?: object;
    constructor();
    withVersion(version: string): ClusterUpgradeResponseAction;
    withTargetVersion(targetVersion: string): ClusterUpgradeResponseAction;
    withTargetPlatformVersion(targetPlatformVersion: string): ClusterUpgradeResponseAction;
    withStrategy(strategy: UpgradeStrategy): ClusterUpgradeResponseAction;
    withConfig(config: object): ClusterUpgradeResponseAction;
}
//# sourceMappingURL=ClusterUpgradeResponseAction.d.ts.map