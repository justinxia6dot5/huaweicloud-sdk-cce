import { PostcheckCluserResponseMetadata } from './PostcheckCluserResponseMetadata';
import { PostcheckClusterResponseBodyStatus } from './PostcheckClusterResponseBodyStatus';
import { PostcheckSpec } from './PostcheckSpec';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreatePostCheckResponse extends SdkResponse {
    apiVersion?: string;
    kind?: string;
    metadata?: PostcheckCluserResponseMetadata;
    spec?: PostcheckSpec;
    status?: PostcheckClusterResponseBodyStatus;
    constructor();
    withApiVersion(apiVersion: string): CreatePostCheckResponse;
    withKind(kind: string): CreatePostCheckResponse;
    withMetadata(metadata: PostcheckCluserResponseMetadata): CreatePostCheckResponse;
    withSpec(spec: PostcheckSpec): CreatePostCheckResponse;
    withStatus(status: PostcheckClusterResponseBodyStatus): CreatePostCheckResponse;
}
//# sourceMappingURL=CreatePostCheckResponse.d.ts.map