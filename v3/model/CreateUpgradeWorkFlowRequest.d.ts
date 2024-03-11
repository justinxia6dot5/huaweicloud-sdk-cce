import { CreateUpgradeWorkFlowRequestBody } from './CreateUpgradeWorkFlowRequestBody';
export declare class CreateUpgradeWorkFlowRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: CreateUpgradeWorkFlowRequestBody;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): CreateUpgradeWorkFlowRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): CreateUpgradeWorkFlowRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: CreateUpgradeWorkFlowRequestBody): CreateUpgradeWorkFlowRequest;
}
//# sourceMappingURL=CreateUpgradeWorkFlowRequest.d.ts.map