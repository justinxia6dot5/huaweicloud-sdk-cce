import { PreCheckItemStatus } from './PreCheckItemStatus';
export declare class AddonCheckStatus {
    phase?: string;
    itemsStatus?: Array<PreCheckItemStatus>;
    constructor();
    withPhase(phase: string): AddonCheckStatus;
    withItemsStatus(itemsStatus: Array<PreCheckItemStatus>): AddonCheckStatus;
}
//# sourceMappingURL=AddonCheckStatus.d.ts.map