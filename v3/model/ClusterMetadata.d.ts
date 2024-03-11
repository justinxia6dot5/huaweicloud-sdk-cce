export declare class ClusterMetadata {
    name?: string;
    uid?: string;
    alias?: string;
    annotations?: {
        [key: string]: string;
    };
    labels?: {
        [key: string]: string;
    };
    creationTimestamp?: string;
    updateTimestamp?: string;
    constructor(name?: string);
    withName(name: string): ClusterMetadata;
    withUid(uid: string): ClusterMetadata;
    withAlias(alias: string): ClusterMetadata;
    withAnnotations(annotations: {
        [key: string]: string;
    }): ClusterMetadata;
    withLabels(labels: {
        [key: string]: string;
    }): ClusterMetadata;
    withCreationTimestamp(creationTimestamp: string): ClusterMetadata;
    withUpdateTimestamp(updateTimestamp: string): ClusterMetadata;
}
//# sourceMappingURL=ClusterMetadata.d.ts.map