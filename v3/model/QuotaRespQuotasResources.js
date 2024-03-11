"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotaRespQuotasResources = void 0;
class QuotaRespQuotasResources {
    constructor() {
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withQuota(quota) {
        this['quota'] = quota;
        return this;
    }
    withUsed(used) {
        this['used'] = used;
        return this;
    }
}
exports.QuotaRespQuotasResources = QuotaRespQuotasResources;
//# sourceMappingURL=QuotaRespQuotasResources.js.map