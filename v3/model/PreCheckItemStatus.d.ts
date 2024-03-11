import { RiskSource } from './RiskSource';
export declare class PreCheckItemStatus {
    name?: string;
    kind?: string;
    group?: string;
    level?: string;
    phase?: string;
    message?: string;
    riskSource?: RiskSource;
    errorCodes?: Array<string>;
    constructor();
    withName(name: string): PreCheckItemStatus;
    withKind(kind: string): PreCheckItemStatus;
    withGroup(group: string): PreCheckItemStatus;
    withLevel(level: string): PreCheckItemStatus;
    withPhase(phase: string): PreCheckItemStatus;
    withMessage(message: string): PreCheckItemStatus;
    withRiskSource(riskSource: RiskSource): PreCheckItemStatus;
    withErrorCodes(errorCodes: Array<string>): PreCheckItemStatus;
}
//# sourceMappingURL=PreCheckItemStatus.d.ts.map