import { ReinstallVolumeSpec } from './ReinstallVolumeSpec';
import { UserTag } from './UserTag';
export declare class ReinstallServerConfig {
    userTags?: Array<UserTag>;
    rootVolume?: ReinstallVolumeSpec;
    constructor();
    withUserTags(userTags: Array<UserTag>): ReinstallServerConfig;
    withRootVolume(rootVolume: ReinstallVolumeSpec): ReinstallServerConfig;
}
//# sourceMappingURL=ReinstallServerConfig.d.ts.map