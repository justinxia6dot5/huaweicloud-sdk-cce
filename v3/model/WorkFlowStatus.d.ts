import { LineStatus } from './LineStatus';
import { PointStatus } from './PointStatus';
import { WorkFlowPhase } from './WorkFlowPhase';
export declare class WorkFlowStatus {
    phase?: WorkFlowPhase;
    pointStatuses?: Array<PointStatus>;
    lineStatuses?: Array<LineStatus>;
    constructor();
    withPhase(phase: WorkFlowPhase): WorkFlowStatus;
    withPointStatuses(pointStatuses: Array<PointStatus>): WorkFlowStatus;
    withLineStatuses(lineStatuses: Array<LineStatus>): WorkFlowStatus;
}
//# sourceMappingURL=WorkFlowStatus.d.ts.map