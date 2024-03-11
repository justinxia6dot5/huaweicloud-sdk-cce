import { NodeCreateRequest } from './NodeCreateRequest';
export declare class CreateNodeRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    nodepoolScaleUp?: CreateNodeRequestNodepoolScaleUpEnum | string;
    body?: NodeCreateRequest;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): CreateNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): CreateNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withNodepoolScaleUp(nodepoolScaleUp: CreateNodeRequestNodepoolScaleUpEnum | string): CreateNodeRequest;
    withBody(body: NodeCreateRequest): CreateNodeRequest;
}
/**
    * @export
    * @enum {string}
    */
export declare enum CreateNodeRequestNodepoolScaleUpEnum {
    NODEPOOLSCALEUP = "NodepoolScaleUp"
}
//# sourceMappingURL=CreateNodeRequest.d.ts.map