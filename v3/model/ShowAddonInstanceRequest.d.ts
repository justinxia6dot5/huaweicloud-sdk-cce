export declare class ShowAddonInstanceRequest {
    private 'Content-Type'?;
    id?: string;
    private 'cluster_id'?;
    constructor(contentType?: string, id?: string);
    withContentType(contentType: string): ShowAddonInstanceRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withId(id: string): ShowAddonInstanceRequest;
    withClusterId(clusterId: string): ShowAddonInstanceRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
}
//# sourceMappingURL=ShowAddonInstanceRequest.d.ts.map