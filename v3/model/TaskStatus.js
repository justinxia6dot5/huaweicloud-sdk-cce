"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
class TaskStatus {
    constructor() {
    }
    withJobID(jobID) {
        this['jobID'] = jobID;
        return this;
    }
}
exports.TaskStatus = TaskStatus;
//# sourceMappingURL=TaskStatus.js.map