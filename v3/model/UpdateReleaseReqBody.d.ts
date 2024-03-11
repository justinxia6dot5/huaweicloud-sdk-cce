import { CreateReleaseReqBodyValues } from './CreateReleaseReqBodyValues';
import { ReleaseReqBodyParams } from './ReleaseReqBodyParams';
export declare class UpdateReleaseReqBody {
    private 'chart_id'?;
    action?: UpdateReleaseReqBodyActionEnum | string;
    parameters?: ReleaseReqBodyParams;
    values?: CreateReleaseReqBodyValues;
    constructor(chartId?: string, action?: string, parameters?: ReleaseReqBodyParams, values?: CreateReleaseReqBodyValues);
    withChartId(chartId: string): UpdateReleaseReqBody;
    set chartId(chartId: string | undefined);
    get chartId(): string | undefined;
    withAction(action: UpdateReleaseReqBodyActionEnum | string): UpdateReleaseReqBody;
    withParameters(parameters: ReleaseReqBodyParams): UpdateReleaseReqBody;
    withValues(values: CreateReleaseReqBodyValues): UpdateReleaseReqBody;
}
/**
    * @export
    * @enum {string}
    */
export declare enum UpdateReleaseReqBodyActionEnum {
    UPGRADE = "upgrade",
    ROLLBACK = "rollback"
}
//# sourceMappingURL=UpdateReleaseReqBody.d.ts.map