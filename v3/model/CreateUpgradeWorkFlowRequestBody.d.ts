import { WorkFlowSpec } from './WorkFlowSpec';
export declare class CreateUpgradeWorkFlowRequestBody {
    kind?: string;
    apiVersion?: string;
    spec?: WorkFlowSpec;
    constructor(kind?: string, apiVersion?: string, spec?: WorkFlowSpec);
    withKind(kind: string): CreateUpgradeWorkFlowRequestBody;
    withApiVersion(apiVersion: string): CreateUpgradeWorkFlowRequestBody;
    withSpec(spec: WorkFlowSpec): CreateUpgradeWorkFlowRequestBody;
}
//# sourceMappingURL=CreateUpgradeWorkFlowRequestBody.d.ts.map