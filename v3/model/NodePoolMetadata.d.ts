export declare class NodePoolMetadata {
    name?: string;
    uid?: string;
    annotations?: {
        [key: string]: string;
    };
    updateTimestamp?: string;
    creationTimestamp?: string;
    constructor(name?: string);
    withName(name: string): NodePoolMetadata;
    withUid(uid: string): NodePoolMetadata;
    withAnnotations(annotations: {
        [key: string]: string;
    }): NodePoolMetadata;
    withUpdateTimestamp(updateTimestamp: string): NodePoolMetadata;
    withCreationTimestamp(creationTimestamp: string): NodePoolMetadata;
}
//# sourceMappingURL=NodePoolMetadata.d.ts.map