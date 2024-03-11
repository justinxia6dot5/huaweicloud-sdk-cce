import { QuotaResource } from './QuotaResource';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowQuotasResponse extends SdkResponse {
    quotas?: Array<QuotaResource>;
    constructor();
    withQuotas(quotas: Array<QuotaResource>): ShowQuotasResponse;
}
//# sourceMappingURL=ShowQuotasResponse.d.ts.map