import { Cluster } from './Cluster';
export declare class CreateClusterRequest {
    private 'Content-Type'?;
    body?: Cluster;
    constructor(contentType?: string);
    withContentType(contentType: string): CreateClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: Cluster): CreateClusterRequest;
}
//# sourceMappingURL=CreateClusterRequest.d.ts.map