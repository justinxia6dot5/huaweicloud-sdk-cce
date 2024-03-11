import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateAddonInstanceResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceSpec;
    status?: AddonInstanceStatus;
    constructor();
    withKind(kind: string): UpdateAddonInstanceResponse;
    withApiVersion(apiVersion: string): UpdateAddonInstanceResponse;
    withMetadata(metadata: AddonMetadata): UpdateAddonInstanceResponse;
    withSpec(spec: InstanceSpec): UpdateAddonInstanceResponse;
    withStatus(status: AddonInstanceStatus): UpdateAddonInstanceResponse;
}
//# sourceMappingURL=UpdateAddonInstanceResponse.d.ts.map