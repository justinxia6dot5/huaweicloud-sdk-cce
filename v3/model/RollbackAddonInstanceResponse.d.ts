import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class RollbackAddonInstanceResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceSpec;
    status?: AddonInstanceStatus;
    constructor();
    withKind(kind: string): RollbackAddonInstanceResponse;
    withApiVersion(apiVersion: string): RollbackAddonInstanceResponse;
    withMetadata(metadata: AddonMetadata): RollbackAddonInstanceResponse;
    withSpec(spec: InstanceSpec): RollbackAddonInstanceResponse;
    withStatus(status: AddonInstanceStatus): RollbackAddonInstanceResponse;
}
//# sourceMappingURL=RollbackAddonInstanceResponse.d.ts.map