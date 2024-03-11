export declare class QuotaResource {
    quotaKey?: string;
    quotaLimit?: number;
    used?: number;
    unit?: string;
    regionId?: string;
    availabilityZoneId?: string;
    constructor();
    withQuotaKey(quotaKey: string): QuotaResource;
    withQuotaLimit(quotaLimit: number): QuotaResource;
    withUsed(used: number): QuotaResource;
    withUnit(unit: string): QuotaResource;
    withRegionId(regionId: string): QuotaResource;
    withAvailabilityZoneId(availabilityZoneId: string): QuotaResource;
}
//# sourceMappingURL=QuotaResource.d.ts.map