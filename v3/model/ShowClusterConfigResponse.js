"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClusterConfigResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ShowClusterConfigResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
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
exports.ShowClusterConfigResponse = ShowClusterConfigResponse;
//# sourceMappingURL=ShowClusterConfigResponse.js.map