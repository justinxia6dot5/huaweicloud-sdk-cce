"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointStatus = void 0;
class PointStatus {
    constructor() {
    }
    withTaskType(taskType) {
        this['taskType'] = taskType;
        return this;
    }
    withTaskID(taskID) {
        this['taskID'] = taskID;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withStartTimeStamp(startTimeStamp) {
        this['startTimeStamp'] = startTimeStamp;
        return this;
    }
    withEndTimeStamp(endTimeStamp) {
        this['endTimeStamp'] = endTimeStamp;
        return this;
    }
    withExpireTimeStamp(expireTimeStamp) {
        this['expireTimeStamp'] = expireTimeStamp;
        return this;
    }
}
exports.PointStatus = PointStatus;
//# sourceMappingURL=PointStatus.js.map