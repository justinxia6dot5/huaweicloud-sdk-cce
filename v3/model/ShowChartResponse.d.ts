import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowChartResponse extends SdkResponse {
    id?: string;
    name?: string;
    values?: string;
    translate?: string;
    instruction?: string;
    version?: string;
    description?: string;
    source?: string;
    private 'icon_url'?;
    private 'public'?;
    private 'chart_url'?;
    private 'create_at'?;
    private 'update_at'?;
    constructor();
    withId(id: string): ShowChartResponse;
    withName(name: string): ShowChartResponse;
    withValues(values: string): ShowChartResponse;
    withTranslate(translate: string): ShowChartResponse;
    withInstruction(instruction: string): ShowChartResponse;
    withVersion(version: string): ShowChartResponse;
    withDescription(description: string): ShowChartResponse;
    withSource(source: string): ShowChartResponse;
    withIconUrl(iconUrl: string): ShowChartResponse;
    set iconUrl(iconUrl: string | undefined);
    get iconUrl(): string | undefined;
    withPublic(_public: boolean): ShowChartResponse;
    set _public(_public: boolean | undefined);
    get _public(): boolean | undefined;
    withChartUrl(chartUrl: string): ShowChartResponse;
    set chartUrl(chartUrl: string | undefined);
    get chartUrl(): string | undefined;
    withCreateAt(createAt: string): ShowChartResponse;
    set createAt(createAt: string | undefined);
    get createAt(): string | undefined;
    withUpdateAt(updateAt: string): ShowChartResponse;
    set updateAt(updateAt: string | undefined);
    get updateAt(): string | undefined;
}
//# sourceMappingURL=ShowChartResponse.d.ts.map