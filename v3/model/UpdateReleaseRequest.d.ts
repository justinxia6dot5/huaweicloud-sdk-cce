import { UpdateReleaseReqBody } from './UpdateReleaseReqBody';
export declare class UpdateReleaseRequest {
    name?: string;
    namespace?: string;
    private 'Content-Type'?;
    private 'cluster_id'?;
    body?: UpdateReleaseReqBody;
    constructor(name?: string, namespace?: string, contentType?: string, clusterId?: string);
    withName(name: string): UpdateReleaseRequest;
    withNamespace(namespace: string): UpdateReleaseRequest;
    withContentType(contentType: string): UpdateReleaseRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withClusterId(clusterId: string): UpdateReleaseRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: UpdateReleaseReqBody): UpdateReleaseRequest;
}
//# sourceMappingURL=UpdateReleaseRequest.d.ts.map