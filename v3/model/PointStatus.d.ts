import { TaskType } from './TaskType';
import { UpgradeWorkflowTaskStatus } from './UpgradeWorkflowTaskStatus';
export declare class PointStatus {
    taskType?: TaskType;
    taskID?: string;
    status?: UpgradeWorkflowTaskStatus;
    startTimeStamp?: string;
    endTimeStamp?: string;
    expireTimeStamp?: string;
    constructor();
    withTaskType(taskType: TaskType): PointStatus;
    withTaskID(taskID: string): PointStatus;
    withStatus(status: UpgradeWorkflowTaskStatus): PointStatus;
    withStartTimeStamp(startTimeStamp: string): PointStatus;
    withEndTimeStamp(endTimeStamp: string): PointStatus;
    withExpireTimeStamp(expireTimeStamp: string): PointStatus;
}
//# sourceMappingURL=PointStatus.d.ts.map