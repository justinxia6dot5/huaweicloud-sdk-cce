import { Versions } from './Versions';
export declare class AddonInstanceStatus {
    status?: AddonInstanceStatusStatusEnum | string;
    private 'Reason'?;
    message?: string;
    targetVersions?: Array<string>;
    currentVersion?: Versions;
    isRollbackable?: boolean;
    previousVersion?: string;
    constructor(status?: string, reason?: string, message?: string, currentVersion?: Versions);
    withStatus(status: AddonInstanceStatusStatusEnum | string): AddonInstanceStatus;
    withReason(reason: string): AddonInstanceStatus;
    set reason(reason: string | undefined);
    get reason(): string | undefined;
    withMessage(message: string): AddonInstanceStatus;
    withTargetVersions(targetVersions: Array<string>): AddonInstanceStatus;
    withCurrentVersion(currentVersion: Versions): AddonInstanceStatus;
    withIsRollbackable(isRollbackable: boolean): AddonInstanceStatus;
    withPreviousVersion(previousVersion: string): AddonInstanceStatus;
}
/**
    * @export
    * @enum {string}
    */
export declare enum AddonInstanceStatusStatusEnum {
    RUNNING = "running",
    ABNORMAL = "abnormal",
    INSTALLING = "installing",
    INSTALLFAILED = "installFailed",
    UPGRADING = "upgrading",
    UPGRADEFAILED = "upgradeFailed",
    DELETING = "deleting",
    DELETESUCCESS = "deleteSuccess",
    DELETEFAILED = "deleteFailed",
    AVAILABLE = "available",
    ROLLBACKING = "rollbacking",
    ROLLBACKFAILED = "rollbackFailed"
}
//# sourceMappingURL=AddonInstanceStatus.d.ts.map