export declare class NodeMetadata {
    name?: string;
    uid?: string;
    labels?: {
        [key: string]: string;
    };
    annotations?: {
        [key: string]: string;
    };
    creationTimestamp?: string;
    updateTimestamp?: string;
    constructor();
    withName(name: string): NodeMetadata;
    withUid(uid: string): NodeMetadata;
    withLabels(labels: {
        [key: string]: string;
    }): NodeMetadata;
    withAnnotations(annotations: {
        [key: string]: string;
    }): NodeMetadata;
    withCreationTimestamp(creationTimestamp: string): NodeMetadata;
    withUpdateTimestamp(updateTimestamp: string): NodeMetadata;
}
//# sourceMappingURL=NodeMetadata.d.ts.map