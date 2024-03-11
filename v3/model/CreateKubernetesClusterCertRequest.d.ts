import { CertDuration } from './CertDuration';
export declare class CreateKubernetesClusterCertRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    body?: CertDuration;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): CreateKubernetesClusterCertRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): CreateKubernetesClusterCertRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: CertDuration): CreateKubernetesClusterCertRequest;
}
//# sourceMappingURL=CreateKubernetesClusterCertRequest.d.ts.map