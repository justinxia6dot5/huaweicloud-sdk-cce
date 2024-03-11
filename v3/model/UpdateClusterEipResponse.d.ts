import { MasterEIPResponseSpec } from './MasterEIPResponseSpec';
import { MasterEIPResponseStatus } from './MasterEIPResponseStatus';
import { Metadata } from './Metadata';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class UpdateClusterEipResponse extends SdkResponse {
    metadata?: Metadata;
    spec?: MasterEIPResponseSpec;
    status?: MasterEIPResponseStatus;
    constructor();
    withMetadata(metadata: Metadata): UpdateClusterEipResponse;
    withSpec(spec: MasterEIPResponseSpec): UpdateClusterEipResponse;
    withStatus(status: MasterEIPResponseStatus): UpdateClusterEipResponse;
}
//# sourceMappingURL=UpdateClusterEipResponse.d.ts.map