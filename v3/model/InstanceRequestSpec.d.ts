export declare class InstanceRequestSpec {
    version?: string;
    clusterID?: string;
    values?: {
        [key: string]: object;
    };
    addonTemplateName?: string;
    constructor(clusterID?: string, values?: {
        [key: string]: object;
    }, addonTemplateName?: string);
    withVersion(version: string): InstanceRequestSpec;
    withClusterID(clusterID: string): InstanceRequestSpec;
    withValues(values: {
        [key: string]: object;
    }): InstanceRequestSpec;
    withAddonTemplateName(addonTemplateName: string): InstanceRequestSpec;
}
//# sourceMappingURL=InstanceRequestSpec.d.ts.map