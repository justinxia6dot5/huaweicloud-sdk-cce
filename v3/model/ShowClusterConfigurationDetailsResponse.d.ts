import { PackageOptions } from './PackageOptions';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ShowClusterConfigurationDetailsResponse extends SdkResponse {
    body?: {
        [key: string]: Array<PackageOptions>;
    };
    constructor();
    withBody(body: {
        [key: string]: Array<PackageOptions>;
    }): ShowClusterConfigurationDetailsResponse;
}
//# sourceMappingURL=ShowClusterConfigurationDetailsResponse.d.ts.map