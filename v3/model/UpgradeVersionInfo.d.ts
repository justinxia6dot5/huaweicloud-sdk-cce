export declare class UpgradeVersionInfo {
    release?: string;
    patch?: string;
    suggestPatch?: string;
    targetVersions?: Array<string>;
    constructor();
    withRelease(release: string): UpgradeVersionInfo;
    withPatch(patch: string): UpgradeVersionInfo;
    withSuggestPatch(suggestPatch: string): UpgradeVersionInfo;
    withTargetVersions(targetVersions: Array<string>): UpgradeVersionInfo;
}
//# sourceMappingURL=UpgradeVersionInfo.d.ts.map