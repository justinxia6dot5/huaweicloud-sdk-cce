import { UpgradeClusterRequestMetadata } from './UpgradeClusterRequestMetadata';
import { UpgradeSpec } from './UpgradeSpec';
export declare class UpgradeClusterRequestBody {
    metadata?: UpgradeClusterRequestMetadata;
    spec?: UpgradeSpec;
    constructor(metadata?: UpgradeClusterRequestMetadata, spec?: UpgradeSpec);
    withMetadata(metadata: UpgradeClusterRequestMetadata): UpgradeClusterRequestBody;
    withSpec(spec: UpgradeSpec): UpgradeClusterRequestBody;
}
//# sourceMappingURL=UpgradeClusterRequestBody.d.ts.map