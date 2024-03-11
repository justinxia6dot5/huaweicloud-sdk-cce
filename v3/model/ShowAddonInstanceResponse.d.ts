import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowAddonInstanceResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: InstanceSpec;
    status?: AddonInstanceStatus;
    constructor();
    withKind(kind: string): ShowAddonInstanceResponse;
    withApiVersion(apiVersion: string): ShowAddonInstanceResponse;
    withMetadata(metadata: AddonMetadata): ShowAddonInstanceResponse;
    withSpec(spec: InstanceSpec): ShowAddonInstanceResponse;
    withStatus(status: AddonInstanceStatus): ShowAddonInstanceResponse;
}
//# sourceMappingURL=ShowAddonInstanceResponse.d.ts.map