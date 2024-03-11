import { NodePool } from './NodePool';
export declare class CreateNodePoolRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: NodePool;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): CreateNodePoolRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): CreateNodePoolRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: NodePool): CreateNodePoolRequest;
}
//# sourceMappingURL=CreateNodePoolRequest.d.ts.map