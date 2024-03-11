import { NodePoolUpdate } from './NodePoolUpdate';
export declare class UpdateNodePoolRequest {
    private 'cluster_id'?;
    private 'nodepool_id'?;
    private 'Content-Type'?;
    body?: NodePoolUpdate;
    constructor(clusterId?: string, nodepoolId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateNodePoolRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodepoolId(nodepoolId: string): UpdateNodePoolRequest;
    set nodepoolId(nodepoolId: string | undefined);
    get nodepoolId(): string | undefined;
    withContentType(contentType: string): UpdateNodePoolRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: NodePoolUpdate): UpdateNodePoolRequest;
}
//# sourceMappingURL=UpdateNodePoolRequest.d.ts.map