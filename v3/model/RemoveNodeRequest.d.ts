import { RemoveNodesTask } from './RemoveNodesTask';
export declare class RemoveNodeRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: RemoveNodesTask;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): RemoveNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): RemoveNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: RemoveNodesTask): RemoveNodeRequest;
}
//# sourceMappingURL=RemoveNodeRequest.d.ts.map