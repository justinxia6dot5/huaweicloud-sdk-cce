import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';
export declare class UpgradeWorkFlow {
    kind?: string;
    apiVersion?: string;
    metadata?: Metadata;
    spec?: WorkFlowSpec;
    status?: WorkFlowStatus;
    constructor();
    withKind(kind: string): UpgradeWorkFlow;
    withApiVersion(apiVersion: string): UpgradeWorkFlow;
    withMetadata(metadata: Metadata): UpgradeWorkFlow;
    withSpec(spec: WorkFlowSpec): UpgradeWorkFlow;
    withStatus(status: WorkFlowStatus): UpgradeWorkFlow;
}
//# sourceMappingURL=UpgradeWorkFlow.d.ts.map