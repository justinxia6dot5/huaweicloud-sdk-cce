import { ClusterLogConfigLogConfigs } from './ClusterLogConfigLogConfigs';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateClusterLogConfigResponse extends SdkResponse {
    private 'ttl_in_days'?;
    private 'log_configs'?;
    constructor();
    withTtlInDays(ttlInDays: number): UpdateClusterLogConfigResponse;
    set ttlInDays(ttlInDays: number | undefined);
    get ttlInDays(): number | undefined;
    withLogConfigs(logConfigs: Array<ClusterLogConfigLogConfigs>): UpdateClusterLogConfigResponse;
    set logConfigs(logConfigs: Array<ClusterLogConfigLogConfigs> | undefined);
    get logConfigs(): Array<ClusterLogConfigLogConfigs> | undefined;
}
//# sourceMappingURL=UpdateClusterLogConfigResponse.d.ts.map