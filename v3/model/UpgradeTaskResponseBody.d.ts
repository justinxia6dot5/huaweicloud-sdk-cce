import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './UpgradeTaskSpec';
import { UpgradeTaskStatus } from './UpgradeTaskStatus';
export declare class UpgradeTaskResponseBody {
    apiVersion?: string;
    kind?: string;
    metadata?: UpgradeTaskMetadata;
    spec?: UpgradeTaskSpec;
    status?: UpgradeTaskStatus;
    constructor();
    withApiVersion(apiVersion: string): UpgradeTaskResponseBody;
    withKind(kind: string): UpgradeTaskResponseBody;
    withMetadata(metadata: UpgradeTaskMetadata): UpgradeTaskResponseBody;
    withSpec(spec: UpgradeTaskSpec): UpgradeTaskResponseBody;
    withStatus(status: UpgradeTaskStatus): UpgradeTaskResponseBody;
}
//# sourceMappingURL=UpgradeTaskResponseBody.d.ts.map