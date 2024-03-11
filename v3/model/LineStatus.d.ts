import { TaskType } from './TaskType';
export declare class LineStatus {
    startPoint?: TaskType;
    endPoint?: TaskType;
    critical?: string;
    constructor();
    withStartPoint(startPoint: TaskType): LineStatus;
    withEndPoint(endPoint: TaskType): LineStatus;
    withCritical(critical: string): LineStatus;
}
//# sourceMappingURL=LineStatus.d.ts.map