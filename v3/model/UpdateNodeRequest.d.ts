import { ClusterNodeInformation } from './ClusterNodeInformation';
export declare class UpdateNodeRequest {
    private 'cluster_id'?;
    private 'node_id'?;
    private 'Content-Type'?;
    body?: ClusterNodeInformation;
    constructor(clusterId?: string, nodeId?: string, contentType?: string);
    withClusterId(clusterId: string): UpdateNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withNodeId(nodeId: string): UpdateNodeRequest;
    set nodeId(nodeId: string | undefined);
    get nodeId(): string | undefined;
    withContentType(contentType: string): UpdateNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: ClusterNodeInformation): UpdateNodeRequest;
}
//# sourceMappingURL=UpdateNodeRequest.d.ts.map