export declare class ResourceRequirements {
    limits?: {
        [key: string]: string;
    };
    requests?: {
        [key: string]: string;
    };
    constructor();
    withLimits(limits: {
        [key: string]: string;
    }): ResourceRequirements;
    withRequests(requests: {
        [key: string]: string;
    }): ResourceRequirements;
}
//# sourceMappingURL=ResourceRequirements.d.ts.map