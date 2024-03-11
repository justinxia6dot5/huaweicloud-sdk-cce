export declare class InstanceSpec {
    clusterID?: string;
    version?: string;
    addonTemplateName?: string;
    addonTemplateType?: string;
    addonTemplateLogo?: string;
    addonTemplateLabels?: Array<string>;
    description?: string;
    values?: {
        [key: string]: object;
    };
    constructor(clusterID?: string, version?: string, addonTemplateName?: string, addonTemplateType?: string, description?: string, values?: {
        [key: string]: object;
    });
    withClusterID(clusterID: string): InstanceSpec;
    withVersion(version: string): InstanceSpec;
    withAddonTemplateName(addonTemplateName: string): InstanceSpec;
    withAddonTemplateType(addonTemplateType: string): InstanceSpec;
    withAddonTemplateLogo(addonTemplateLogo: string): InstanceSpec;
    withAddonTemplateLabels(addonTemplateLabels: Array<string>): InstanceSpec;
    withDescription(description: string): InstanceSpec;
    withValues(values: {
        [key: string]: object;
    }): InstanceSpec;
}
//# sourceMappingURL=InstanceSpec.d.ts.map