"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotaResource = void 0;
class QuotaResource {
    constructor() {
    }
    withQuotaKey(quotaKey) {
        this['quotaKey'] = quotaKey;
        return this;
    }
    withQuotaLimit(quotaLimit) {
        this['quotaLimit'] = quotaLimit;
        return this;
    }
    withUsed(used) {
        this['used'] = used;
        return this;
    }
    withUnit(unit) {
        this['unit'] = unit;
        return this;
    }
    withRegionId(regionId) {
        this['regionId'] = regionId;
        return this;
    }
    withAvailabilityZoneId(availabilityZoneId) {
        this['availabilityZoneId'] = availabilityZoneId;
        return this;
    }
}
exports.QuotaResource = QuotaResource;
//# sourceMappingURL=QuotaResource.js.map