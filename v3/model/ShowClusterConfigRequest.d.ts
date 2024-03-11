export declare class ShowClusterConfigRequest {
    type?: ShowClusterConfigRequestTypeEnum | string;
    private 'cluster_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, contentType?: string);
    withType(type: ShowClusterConfigRequestTypeEnum | string): ShowClusterConfigRequest;
    withClusterId(clusterId: string): ShowClusterConfigRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): ShowClusterConfigRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ShowClusterConfigRequestTypeEnum {
    CONTROL = "control",
    AUDIT = "audit",
    SYSTEM_ADDON = "system-addon"
}
//# sourceMappingURL=ShowClusterConfigRequest.d.ts.map