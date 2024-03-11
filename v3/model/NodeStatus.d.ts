import { DeleteStatus } from './DeleteStatus';
export declare class NodeStatus {
    phase?: NodeStatusPhaseEnum | string;
    lastProbeTime?: string;
    jobID?: string;
    serverId?: string;
    privateIP?: string;
    privateIPv6IP?: string;
    publicIP?: string;
    deleteStatus?: DeleteStatus;
    constructor();
    withPhase(phase: NodeStatusPhaseEnum | string): NodeStatus;
    withLastProbeTime(lastProbeTime: string): NodeStatus;
    withJobID(jobID: string): NodeStatus;
    withServerId(serverId: string): NodeStatus;
    withPrivateIP(privateIP: string): NodeStatus;
    withPrivateIPv6IP(privateIPv6IP: string): NodeStatus;
    withPublicIP(publicIP: string): NodeStatus;
    withDeleteStatus(deleteStatus: DeleteStatus): NodeStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum NodeStatusPhaseEnum {
    BUILD = "Build",
    INSTALLING = "Installing",
    UPGRADING = "Upgrading",
    ACTIVE = "Active",
    ABNORMAL = "Abnormal",
    DELETING = "Deleting",
    ERROR = "Error"
}
//# sourceMappingURL=NodeStatus.d.ts.map