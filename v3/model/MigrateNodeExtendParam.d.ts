export declare class MigrateNodeExtendParam {
    maxPods?: number;
    private 'DockerLVMConfigOverride'?;
    private 'alpha.cce/preInstall'?;
    private 'alpha.cce/postInstall'?;
    private 'alpha.cce/NodeImageID'?;
    constructor();
    withMaxPods(maxPods: number): MigrateNodeExtendParam;
    withDockerLVMConfigOverride(dockerLVMConfigOverride: string): MigrateNodeExtendParam;
    set dockerLVMConfigOverride(dockerLVMConfigOverride: string | undefined);
    get dockerLVMConfigOverride(): string | undefined;
    withAlphaCcePreInstall(alphaCcePreInstall: string): MigrateNodeExtendParam;
    set alphaCcePreInstall(alphaCcePreInstall: string | undefined);
    get alphaCcePreInstall(): string | undefined;
    withAlphaCcePostInstall(alphaCcePostInstall: string): MigrateNodeExtendParam;
    set alphaCcePostInstall(alphaCcePostInstall: string | undefined);
    get alphaCcePostInstall(): string | undefined;
    withAlphaCceNodeImageID(alphaCceNodeImageID: string): MigrateNodeExtendParam;
    set alphaCceNodeImageID(alphaCceNodeImageID: string | undefined);
    get alphaCceNodeImageID(): string | undefined;
}
//# sourceMappingURL=MigrateNodeExtendParam.d.ts.map