export declare class ListClustersRequest {
    private 'Content-Type'?;
    detail?: string;
    status?: ListClustersRequestStatusEnum | string;
    type?: ListClustersRequestTypeEnum | string;
    version?: string;
    constructor(contentType?: string);
    withContentType(contentType: string): ListClustersRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withDetail(detail: string): ListClustersRequest;
    withStatus(status: ListClustersRequestStatusEnum | string): ListClustersRequest;
    withType(type: ListClustersRequestTypeEnum | string): ListClustersRequest;
    withVersion(version: string): ListClustersRequest;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListClustersRequestStatusEnum {
    AVAILABLE = "Available",
    UNAVAILABLE = "Unavailable",
    SCALINGUP = "ScalingUp",
    SCALINGDOWN = "ScalingDown",
    CREATING = "Creating",
    DELETING = "Deleting",
    UPGRADING = "Upgrading",
    RESIZING = "Resizing",
    ROLLINGBACK = "RollingBack",
    ROLLBACKFAILED = "RollbackFailed",
    HIBERNATING = "Hibernating",
    HIBERNATION = "Hibernation",
    AWAKING = "Awaking",
    EMPTY = "Empty"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListClustersRequestTypeEnum {
    VIRTUALMACHINE = "VirtualMachine",
    ARM64 = "ARM64"
}
//# sourceMappingURL=ListClustersRequest.d.ts.map