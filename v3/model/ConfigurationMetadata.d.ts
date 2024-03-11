export declare class ConfigurationMetadata {
    name?: string;
    labels?: {
        [key: string]: string;
    };
    constructor(name?: string);
    withName(name: string): ConfigurationMetadata;
    withLabels(labels: {
        [key: string]: string;
    }): ConfigurationMetadata;
}
//# sourceMappingURL=ConfigurationMetadata.d.ts.map