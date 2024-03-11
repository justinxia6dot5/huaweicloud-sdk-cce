import { ResourceRequirements } from './ResourceRequirements';
export declare class PersistentVolumeClaimSpec {
    volumeID?: string;
    storageType?: string;
    accessModes?: Array<PersistentVolumeClaimSpecAccessModesEnum> | Array<string>;
    storageClassName?: string;
    volumeName?: string;
    resources?: ResourceRequirements;
    volumeMode?: string;
    constructor(volumeID?: string, storageType?: string, accessModes?: Array<string>);
    withVolumeID(volumeID: string): PersistentVolumeClaimSpec;
    withStorageType(storageType: string): PersistentVolumeClaimSpec;
    withAccessModes(accessModes: Array<PersistentVolumeClaimSpecAccessModesEnum> | Array<string>): PersistentVolumeClaimSpec;
    withStorageClassName(storageClassName: string): PersistentVolumeClaimSpec;
    withVolumeName(volumeName: string): PersistentVolumeClaimSpec;
    withResources(resources: ResourceRequirements): PersistentVolumeClaimSpec;
    withVolumeMode(volumeMode: string): PersistentVolumeClaimSpec;
}
/**
    * @export
    * @enum {string}
    */
export declare enum PersistentVolumeClaimSpecAccessModesEnum {
    READONLYMANY = "ReadOnlyMany",
    READWRITEMANY = "ReadWriteMany"
}
//# sourceMappingURL=PersistentVolumeClaimSpec.d.ts.map