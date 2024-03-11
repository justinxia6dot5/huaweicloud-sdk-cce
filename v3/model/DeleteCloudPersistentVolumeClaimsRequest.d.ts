export declare class DeleteCloudPersistentVolumeClaimsRequest {
    name?: string;
    namespace?: string;
    deleteVolume?: string;
    storageType?: string;
    private 'Content-Type'?;
    private 'X-Cluster-ID'?;
    constructor(name?: string, namespace?: string, contentType?: string);
    withName(name: string): DeleteCloudPersistentVolumeClaimsRequest;
    withNamespace(namespace: string): DeleteCloudPersistentVolumeClaimsRequest;
    withDeleteVolume(deleteVolume: string): DeleteCloudPersistentVolumeClaimsRequest;
    withStorageType(storageType: string): DeleteCloudPersistentVolumeClaimsRequest;
    withContentType(contentType: string): DeleteCloudPersistentVolumeClaimsRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withXClusterID(xClusterID: string): DeleteCloudPersistentVolumeClaimsRequest;
    set xClusterID(xClusterID: string | undefined);
    get xClusterID(): string | undefined;
}
//# sourceMappingURL=DeleteCloudPersistentVolumeClaimsRequest.d.ts.map