import { ClusterEndpoints } from './ClusterEndpoints';
export declare class ClusterStatus {
    phase?: string;
    jobID?: string;
    reason?: string;
    message?: string;
    endpoints?: Array<ClusterEndpoints>;
    isLocked?: boolean;
    lockScene?: string;
    lockSource?: string;
    lockSourceId?: string;
    deleteOption?: object;
    deleteStatus?: object;
    constructor();
    withPhase(phase: string): ClusterStatus;
    withJobID(jobID: string): ClusterStatus;
    withReason(reason: string): ClusterStatus;
    withMessage(message: string): ClusterStatus;
    withEndpoints(endpoints: Array<ClusterEndpoints>): ClusterStatus;
    withIsLocked(isLocked: boolean): ClusterStatus;
    withLockScene(lockScene: string): ClusterStatus;
    withLockSource(lockSource: string): ClusterStatus;
    withLockSourceId(lockSourceId: string): ClusterStatus;
    withDeleteOption(deleteOption: object): ClusterStatus;
    withDeleteStatus(deleteStatus: object): ClusterStatus;
}
//# sourceMappingURL=ClusterStatus.d.ts.map