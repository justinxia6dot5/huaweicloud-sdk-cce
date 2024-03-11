"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowPreCheckRequest = void 0;
class ShowPreCheckRequest {
    constructor(clusterId, taskId) {
        this['cluster_id'] = clusterId;
        this['task_id'] = taskId;
    }
    withClusterId(clusterId) {
        this['cluster_id'] = clusterId;
        return this;
    }
    set clusterId(clusterId) {
        this['cluster_id'] = clusterId;
    }
    get clusterId() {
        return this['cluster_id'];
    }
    withTaskId(taskId) {
        this['task_id'] = taskId;
        return this;
    }
    set taskId(taskId) {
        this['task_id'] = taskId;
    }
    get taskId() {
        return this['task_id'];
    }
}
exports.ShowPreCheckRequest = ShowPreCheckRequest;
//# sourceMappingURL=ShowPreCheckRequest.js.map