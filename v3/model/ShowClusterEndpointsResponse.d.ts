import { MasterEIPResponseStatus } from './MasterEIPResponseStatus';
import { Metadata } from './Metadata';
import { OpenAPISpec } from './OpenAPISpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowClusterEndpointsResponse extends SdkResponse {
    metadata?: Metadata;
    spec?: OpenAPISpec;
    status?: MasterEIPResponseStatus;
    constructor();
    withMetadata(metadata: Metadata): ShowClusterEndpointsResponse;
    withSpec(spec: OpenAPISpec): ShowClusterEndpointsResponse;
    withStatus(status: MasterEIPResponseStatus): ShowClusterEndpointsResponse;
}
//# sourceMappingURL=ShowClusterEndpointsResponse.d.ts.map