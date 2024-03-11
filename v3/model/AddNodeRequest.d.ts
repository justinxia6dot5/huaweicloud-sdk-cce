import { AddNodeList } from './AddNodeList';
export declare class AddNodeRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: AddNodeList;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): AddNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): AddNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: AddNodeList): AddNodeRequest;
}
//# sourceMappingURL=AddNodeRequest.d.ts.map