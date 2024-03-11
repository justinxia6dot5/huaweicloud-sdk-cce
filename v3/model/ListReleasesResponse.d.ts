import { ReleaseResp } from './ReleaseResp';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListReleasesResponse extends SdkResponse {
    body?: Array<ReleaseResp>;
    constructor();
    withBody(body: Array<ReleaseResp>): ListReleasesResponse;
}
//# sourceMappingURL=ListReleasesResponse.d.ts.map