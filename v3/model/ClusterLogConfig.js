"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterLogConfig = void 0;
class ClusterLogConfig {
    constructor() {
    }
    withTtlInDays(ttlInDays) {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    set ttlInDays(ttlInDays) {
        this['ttl_in_days'] = ttlInDays;
    }
    get ttlInDays() {
        return this['ttl_in_days'];
    }
    withLogConfigs(logConfigs) {
        this['log_configs'] = logConfigs;
        return this;
    }
    set logConfigs(logConfigs) {
        this['log_configs'] = logConfigs;
    }
    get logConfigs() {
        return this['log_configs'];
    }
}
exports.ClusterLogConfig = ClusterLogConfig;
//# sourceMappingURL=ClusterLogConfig.js.map