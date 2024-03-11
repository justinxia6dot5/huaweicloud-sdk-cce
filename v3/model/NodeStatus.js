"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStatusPhaseEnum = exports.NodeStatus = void 0;
class NodeStatus {
    constructor() {
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withLastProbeTime(lastProbeTime) {
        this['lastProbeTime'] = lastProbeTime;
        return this;
    }
    withJobID(jobID) {
        this['jobID'] = jobID;
        return this;
    }
    withServerId(serverId) {
        this['serverId'] = serverId;
        return this;
    }
    withPrivateIP(privateIP) {
        this['privateIP'] = privateIP;
        return this;
    }
    withPrivateIPv6IP(privateIPv6IP) {
        this['privateIPv6IP'] = privateIPv6IP;
        return this;
    }
    withPublicIP(publicIP) {
        this['publicIP'] = publicIP;
        return this;
    }
    withDeleteStatus(deleteStatus) {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}
exports.NodeStatus = NodeStatus;
/**
    * @export
    * @enum {string}
    */
var NodeStatusPhaseEnum;
(function (NodeStatusPhaseEnum) {
    NodeStatusPhaseEnum["BUILD"] = "Build";
    NodeStatusPhaseEnum["INSTALLING"] = "Installing";
    NodeStatusPhaseEnum["UPGRADING"] = "Upgrading";
    NodeStatusPhaseEnum["ACTIVE"] = "Active";
    NodeStatusPhaseEnum["ABNORMAL"] = "Abnormal";
    NodeStatusPhaseEnum["DELETING"] = "Deleting";
    NodeStatusPhaseEnum["ERROR"] = "Error";
})(NodeStatusPhaseEnum = exports.NodeStatusPhaseEnum || (exports.NodeStatusPhaseEnum = {}));
//# sourceMappingURL=NodeStatus.js.map