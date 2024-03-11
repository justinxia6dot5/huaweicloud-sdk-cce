export declare class DeleteNodeRequest {
    private 'cluster_id'?;
    private 'node_id'?;
    private 'Content-Type'?;
    nodepoolScaleDown?: DeleteNodeRequestNodepoolScaleDownEnum | string;
    constructor(clusterId?: string, nodeId?: string, contentType?: string);
    withClusterId(clusterId: string): DeleteNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodeId(nodeId: string): DeleteNodeRequest;
    set nodeId(nodeId: string | undefined);
    get nodeId(): string | undefined;
    withContentType(contentType: string): DeleteNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withNodepoolScaleDown(nodepoolScaleDown: DeleteNodeRequestNodepoolScaleDownEnum | string): DeleteNodeRequest;
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteNodeRequestNodepoolScaleDownEnum {
    NOSCALEDOWN = "NoScaleDown"
}
//# sourceMappingURL=DeleteNodeRequest.d.ts.map