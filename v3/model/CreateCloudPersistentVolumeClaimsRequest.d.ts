import { PersistentVolumeClaim } from './PersistentVolumeClaim';
export declare class CreateCloudPersistentVolumeClaimsRequest {
    namespace?: string;
    private 'Content-Type'?;
    private 'X-Cluster-ID'?;
    body?: PersistentVolumeClaim;
    constructor(namespace?: string, contentType?: string);
    withNamespace(namespace: string): CreateCloudPersistentVolumeClaimsRequest;
    withContentType(contentType: string): CreateCloudPersistentVolumeClaimsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withXClusterID(xClusterID: string): CreateCloudPersistentVolumeClaimsRequest;
    set xClusterID(xClusterID: string | undefined);
    get xClusterID(): string | undefined;
    withBody(body: PersistentVolumeClaim): CreateCloudPersistentVolumeClaimsRequest;
}
//# sourceMappingURL=CreateCloudPersistentVolumeClaimsRequest.d.ts.map