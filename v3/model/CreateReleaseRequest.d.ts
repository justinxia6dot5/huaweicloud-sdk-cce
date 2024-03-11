import { CreateReleaseReqBody } from './CreateReleaseReqBody';
export declare class CreateReleaseRequest {
    private 'Content-Type'?;
    private 'cluster_id'?;
    body?: CreateReleaseReqBody;
    constructor(contentType?: string, clusterId?: string);
    withContentType(contentType: string): CreateReleaseRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): CreateReleaseRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: CreateReleaseReqBody): CreateReleaseRequest;
}
//# sourceMappingURL=CreateReleaseRequest.d.ts.map