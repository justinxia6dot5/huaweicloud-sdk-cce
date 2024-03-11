import { PreCheckItemStatus } from './PreCheckItemStatus';
export declare class ClusterCheckStatus {
    phase?: string;
    itemsStatus?: Array<PreCheckItemStatus>;
    constructor();
    withPhase(phase: string): ClusterCheckStatus;
    withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): ClusterCheckStatus;
}
//# sourceMappingURL=ClusterCheckStatus.d.ts.map