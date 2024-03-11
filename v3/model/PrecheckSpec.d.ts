import { SkippedCheckItemList } from './SkippedCheckItemList';
export declare class PrecheckSpec {
    clusterID?: string;
    clusterVersion?: string;
    targetVersion?: string;
    skippedCheckItemList?: Array<SkippedCheckItemList>;
    constructor();
    withClusterID(clusterID: string): PrecheckSpec;
    withClusterVersion(clusterVersion: string): PrecheckSpec;
    withTargetVersion(targetVersion: string): PrecheckSpec;
    withSkippedCheckItemList(skippedCheckItemList: Array<SkippedCheckItemList>): PrecheckSpec;
}
//# sourceMappingURL=PrecheckSpec.d.ts.map