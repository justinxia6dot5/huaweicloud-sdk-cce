export declare class Metadata {
    uid?: string;
    name?: string;
    labels?: {
        [key: string]: string;
    };
    annotations?: {
        [key: string]: string;
    };
    updateTimestamp?: string;
    creationTimestamp?: string;
    constructor();
    withUid(uid: string): Metadata;
    withName(name: string): Metadata;
    withLabels(labels: {
        [key: string]: string;
    }): Metadata;
    withAnnotations(annotations: {
        [key: string]: string;
    }): Metadata;
    withUpdateTimestamp(updateTimestamp: string): Metadata;
    withCreationTimestamp(creationTimestamp: string): Metadata;
}
//# sourceMappingURL=Metadata.d.ts.map