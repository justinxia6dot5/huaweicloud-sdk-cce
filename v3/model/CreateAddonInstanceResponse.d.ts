import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateAddonInstanceResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceSpec;
    status?: AddonInstanceStatus;
    constructor();
    withKind(kind: string): CreateAddonInstanceResponse;
    withApiVersion(apiVersion: string): CreateAddonInstanceResponse;
    withMetadata(metadata: AddonMetadata): CreateAddonInstanceResponse;
    withSpec(spec: InstanceSpec): CreateAddonInstanceResponse;
    withStatus(status: AddonInstanceStatus): CreateAddonInstanceResponse;
}
//# sourceMappingURL=CreateAddonInstanceResponse.d.ts.map