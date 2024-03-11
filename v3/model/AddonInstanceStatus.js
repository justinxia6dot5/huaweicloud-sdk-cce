"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddonInstanceStatusStatusEnum = exports.AddonInstanceStatus = void 0;
class AddonInstanceStatus {
    constructor(status, reason, message, currentVersion) {
        this['status'] = status;
        this['Reason'] = reason;
        this['message'] = message;
        this['currentVersion'] = currentVersion;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withReason(reason) {
        this['Reason'] = reason;
        return this;
    }
    set reason(reason) {
        this['Reason'] = reason;
    }
    get reason() {
        return this['Reason'];
    }
    withMessage(message) {
        this['message'] = message;
        return this;
    }
    withTargetVersions(targetVersions) {
        this['targetVersions'] = targetVersions;
        return this;
    }
    withCurrentVersion(currentVersion) {
        this['currentVersion'] = currentVersion;
        return this;
    }
    withIsRollbackable(isRollbackable) {
        this['isRollbackable'] = isRollbackable;
        return this;
    }
    withPreviousVersion(previousVersion) {
        this['previousVersion'] = previousVersion;
        return this;
    }
}
exports.AddonInstanceStatus = AddonInstanceStatus;
/**
    * @export
    * @enum {string}
    */
var AddonInstanceStatusStatusEnum;
(function (AddonInstanceStatusStatusEnum) {
    AddonInstanceStatusStatusEnum["RUNNING"] = "running";
    AddonInstanceStatusStatusEnum["ABNORMAL"] = "abnormal";
    AddonInstanceStatusStatusEnum["INSTALLING"] = "installing";
    AddonInstanceStatusStatusEnum["INSTALLFAILED"] = "installFailed";
    AddonInstanceStatusStatusEnum["UPGRADING"] = "upgrading";
    AddonInstanceStatusStatusEnum["UPGRADEFAILED"] = "upgradeFailed";
    AddonInstanceStatusStatusEnum["DELETING"] = "deleting";
    AddonInstanceStatusStatusEnum["DELETESUCCESS"] = "deleteSuccess";
    AddonInstanceStatusStatusEnum["DELETEFAILED"] = "deleteFailed";
    AddonInstanceStatusStatusEnum["AVAILABLE"] = "available";
    AddonInstanceStatusStatusEnum["ROLLBACKING"] = "rollbacking";
    AddonInstanceStatusStatusEnum["ROLLBACKFAILED"] = "rollbackFailed";
})(AddonInstanceStatusStatusEnum = exports.AddonInstanceStatusStatusEnum || (exports.AddonInstanceStatusStatusEnum = {}));
//# sourceMappingURL=AddonInstanceStatus.js.map