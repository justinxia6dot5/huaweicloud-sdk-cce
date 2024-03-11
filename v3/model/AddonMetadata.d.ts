export declare class AddonMetadata {
    uid?: string;
    name?: string;
    alias?: string;
    labels?: {
        [key: string]: string;
    };
    annotations?: {
        [key: string]: string;
    };
    updateTimestamp?: string;
    creationTimestamp?: string;
    constructor();
    withUid(uid: string): AddonMetadata;
    withName(name: string): AddonMetadata;
    withAlias(alias: string): AddonMetadata;
    withLabels(labels: {
        [key: string]: string;
    }): AddonMetadata;
    withAnnotations(annotations: {
        [key: string]: string;
    }): AddonMetadata;
    withUpdateTimestamp(updateTimestamp: string): AddonMetadata;
    withCreationTimestamp(creationTimestamp: string): AddonMetadata;
}
//# sourceMappingURL=AddonMetadata.d.ts.map