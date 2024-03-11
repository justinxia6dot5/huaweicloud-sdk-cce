import { PrecheckClusterRequestBody } from './PrecheckClusterRequestBody';
export declare class CreatePreCheckRequest {
    private 'cluster_id'?;
    body?: PrecheckClusterRequestBody;
    constructor(clusterId?: string);
    withClusterId(clusterId: string): CreatePreCheckRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withBody(body: PrecheckClusterRequestBody): CreatePreCheckRequest;
}
//# sourceMappingURL=CreatePreCheckRequest.d.ts.map