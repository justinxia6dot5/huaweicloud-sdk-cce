import { APIVersionDetail } from './APIVersionDetail';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowVersionResponse extends SdkResponse {
    versions?: Array<APIVersionDetail>;
    constructor();
    withVersions(versions: Array<APIVersionDetail>): ShowVersionResponse;
}
//# sourceMappingURL=ShowVersionResponse.d.ts.map