export declare class NodePoolCondition {
    type?: string;
    status?: string;
    lastProbeTime?: string;
    lastTransitTime?: string;
    reason?: string;
    message?: string;
    constructor();
    withType(type: string): NodePoolCondition;
    withStatus(status: string): NodePoolCondition;
    withLastProbeTime(lastProbeTime: string): NodePoolCondition;
    withLastTransitTime(lastTransitTime: string): NodePoolCondition;
    withReason(reason: string): NodePoolCondition;
    withMessage(message: string): NodePoolCondition;
}
//# sourceMappingURL=NodePoolCondition.d.ts.map