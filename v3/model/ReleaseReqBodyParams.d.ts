export declare class ReleaseReqBodyParams {
    private 'dry_run'?;
    private 'name_template'?;
    private 'no_hooks'?;
    replace?: boolean;
    recreate?: boolean;
    private 'reset_values'?;
    private 'release_version'?;
    private 'include_hooks'?;
    constructor();
    withDryRun(dryRun: boolean): ReleaseReqBodyParams;
    set dryRun(dryRun: boolean | undefined);
    get dryRun(): boolean | undefined;
    withNameTemplate(nameTemplate: string): ReleaseReqBodyParams;
    set nameTemplate(nameTemplate: string | undefined);
    get nameTemplate(): string | undefined;
    withNoHooks(noHooks: boolean): ReleaseReqBodyParams;
    set noHooks(noHooks: boolean | undefined);
    get noHooks(): boolean | undefined;
    withReplace(replace: boolean): ReleaseReqBodyParams;
    withRecreate(recreate: boolean): ReleaseReqBodyParams;
    withResetValues(resetValues: boolean): ReleaseReqBodyParams;
    set resetValues(resetValues: boolean | undefined);
    get resetValues(): boolean | undefined;
    withReleaseVersion(releaseVersion: number): ReleaseReqBodyParams;
    set releaseVersion(releaseVersion: number | undefined);
    get releaseVersion(): number | undefined;
    withIncludeHooks(includeHooks: boolean): ReleaseReqBodyParams;
    set includeHooks(includeHooks: boolean | undefined);
    get includeHooks(): boolean | undefined;
}
//# sourceMappingURL=ReleaseReqBodyParams.d.ts.map