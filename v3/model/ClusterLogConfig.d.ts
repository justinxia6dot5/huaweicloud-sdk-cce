import { ClusterLogConfigLogConfigs } from './ClusterLogConfigLogConfigs';
export declare class ClusterLogConfig {
    private 'ttl_in_days'?;
    private 'log_configs'?;
    constructor();
    withTtlInDays(ttlInDays: number): ClusterLogConfig;
    set ttlInDays(ttlInDays: number | undefined);
    get ttlInDays(): number | undefined;
    withLogConfigs(logConfigs: Array<ClusterLogConfigLogConfigs>): ClusterLogConfig;
    set logConfigs(logConfigs: Array<ClusterLogConfigLogConfigs> | undefined);
    get logConfigs(): Array<ClusterLogConfigLogConfigs> | undefined;
}
//# sourceMappingURL=ClusterLogConfig.d.ts.map