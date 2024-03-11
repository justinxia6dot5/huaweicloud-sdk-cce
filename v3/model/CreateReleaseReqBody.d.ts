import { CreateReleaseReqBodyValues } from './CreateReleaseReqBodyValues';
import { ReleaseReqBodyParams } from './ReleaseReqBodyParams';
export declare class CreateReleaseReqBody {
    private 'chart_id'?;
    description?: string;
    name?: string;
    namespace?: string;
    version?: string;
    parameters?: ReleaseReqBodyParams;
    values?: CreateReleaseReqBodyValues;
    constructor(chartId?: string, name?: string, namespace?: string, version?: string, values?: CreateReleaseReqBodyValues);
    withChartId(chartId: string): CreateReleaseReqBody;
    set chartId(chartId: string | undefined);
    get chartId(): string | undefined;
    withDescription(description: string): CreateReleaseReqBody;
    withName(name: string): CreateReleaseReqBody;
    withNamespace(namespace: string): CreateReleaseReqBody;
    withVersion(version: string): CreateReleaseReqBody;
    withParameters(parameters: ReleaseReqBodyParams): CreateReleaseReqBody;
    withValues(values: CreateReleaseReqBodyValues): CreateReleaseReqBody;
}
//# sourceMappingURL=CreateReleaseReqBody.d.ts.map