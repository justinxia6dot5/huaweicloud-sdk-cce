export declare class ShowNodeRequest {
    private 'cluster_id'?;
    private 'node_id'?;
    private 'Content-Type'?;
    constructor(clusterId?: string, nodeId?: string, contentType?: string);
    withClusterId(clusterId: string): ShowNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodeId(nodeId: string): ShowNodeRequest;
    set nodeId(nodeId: string | undefined);
    get nodeId(): string | undefined;
    withContentType(contentType: string): ShowNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
}
//# sourceMappingURL=ShowNodeRequest.d.ts.map