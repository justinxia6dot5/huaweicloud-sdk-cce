import { VolumeMetadata } from './VolumeMetadata';
export declare class Volume {
    size?: number;
    volumetype?: string;
    extendParam?: {
        [key: string]: object;
    };
    private 'cluster_id'?;
    private 'cluster_type'?;
    private 'hw:passthrough'?;
    metadata?: VolumeMetadata;
    constructor(size?: number, volumetype?: string);
    withSize(size: number): Volume;
    withVolumetype(volumetype: string): Volume;
    withExtendParam(extendParam: {
        [key: string]: object;
    }): Volume;
    withClusterId(clusterId: string): Volume;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withClusterType(clusterType: string): Volume;
    set clusterType(clusterType: string | undefined);
    get clusterType(): string | undefined;
    withHwPassthrough(hwPassthrough: boolean): Volume;
    set hwPassthrough(hwPassthrough: boolean | undefined);
    get hwPassthrough(): boolean | undefined;
    withMetadata(metadata: VolumeMetadata): Volume;
}
//# sourceMappingURL=Volume.d.ts.map