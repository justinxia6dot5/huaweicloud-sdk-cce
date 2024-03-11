import { UpgradeFeatureGates } from './UpgradeFeatureGates';
import { UpgradeInfoStatus } from './UpgradeInfoStatus';
import { UpgradeVersionInfo } from './UpgradeVersionInfo';
export declare class UpgradeInfoSpec {
    lastUpgradeInfo?: UpgradeInfoStatus;
    versionInfo?: UpgradeVersionInfo;
    upgradeFeatureGates?: UpgradeFeatureGates;
    constructor();
    withLastUpgradeInfo(lastUpgradeInfo: UpgradeInfoStatus): UpgradeInfoSpec;
    withVersionInfo(versionInfo: UpgradeVersionInfo): UpgradeInfoSpec;
    withUpgradeFeatureGates(upgradeFeatureGates: UpgradeFeatureGates): UpgradeInfoSpec;
}
//# sourceMappingURL=UpgradeInfoSpec.d.ts.map