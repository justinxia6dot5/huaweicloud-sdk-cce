import { AddonTemplate } from './AddonTemplate';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class ListAddonTemplatesResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    items?: Array<AddonTemplate>;
    constructor();
    withKind(kind: string): ListAddonTemplatesResponse;
    withApiVersion(apiVersion: string): ListAddonTemplatesResponse;
    withItems(items: Array<AddonTemplate>): ListAddonTemplatesResponse;
}
//# sourceMappingURL=ListAddonTemplatesResponse.d.ts.map