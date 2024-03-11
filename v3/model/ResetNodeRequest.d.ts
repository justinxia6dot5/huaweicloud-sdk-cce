import { ResetNodeList } from './ResetNodeList';
export declare class ResetNodeRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: ResetNodeList;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): ResetNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): ResetNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: ResetNodeList): ResetNodeRequest;
}
//# sourceMappingURL=ResetNodeRequest.d.ts.map