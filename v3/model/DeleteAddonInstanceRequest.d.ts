export declare class DeleteAddonInstanceRequest {
    private 'Content-Type'?;
    id?: string;
    private 'cluster_id'?;
    constructor(contentType?: string, id?: string);
    withContentType(contentType: string): DeleteAddonInstanceRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withId(id: string): DeleteAddonInstanceRequest;
    withClusterId(clusterId: string): DeleteAddonInstanceRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
}
//# sourceMappingURL=DeleteAddonInstanceRequest.d.ts.map