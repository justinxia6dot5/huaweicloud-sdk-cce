import { AddonCheckStatus } from './AddonCheckStatus';
import { ClusterCheckStatus } from './ClusterCheckStatus';
import { NodeCheckStatus } from './NodeCheckStatus';
export declare class PrecheckStatus {
    phase?: string;
    expireTimeStamp?: string;
    message?: string;
    clusterCheckStatus?: ClusterCheckStatus;
    addonCheckStatus?: AddonCheckStatus;
    nodeCheckStatus?: NodeCheckStatus;
    constructor();
    withPhase(phase: string): PrecheckStatus;
    withExpireTimeStamp(expireTimeStamp: string): PrecheckStatus;
    withMessage(message: string): PrecheckStatus;
    withClusterCheckStatus(clusterCheckStatus: ClusterCheckStatus): PrecheckStatus;
    withAddonCheckStatus(addonCheckStatus: AddonCheckStatus): PrecheckStatus;
    withNodeCheckStatus(nodeCheckStatus: NodeCheckStatus): PrecheckStatus;
}
//# sourceMappingURL=PrecheckStatus.d.ts.map