"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CceRegion = void 0;
const region_1 = require("@huaweicloud/huaweicloud-sdk-core/region/region");
class CceRegion {
    static valueOf(regionId) {
        if (!regionId) {
            throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
            return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`);
    }
}
exports.CceRegion = CceRegion;
CceRegion.CN_NORTH_1 = new region_1.Region("cn-north-1", ["https://cce.cn-north-1.myhuaweicloud.com"]);
CceRegion.CN_NORTH_2 = new region_1.Region("cn-north-2", ["https://cce.cn-north-2.myhuaweicloud.com"]);
CceRegion.CN_NORTH_4 = new region_1.Region("cn-north-4", ["https://cce.cn-north-4.myhuaweicloud.com"]);
CceRegion.CN_NORTH_9 = new region_1.Region("cn-north-9", ["https://cce.cn-north-9.myhuaweicloud.com"]);
CceRegion.CN_SOUTH_1 = new region_1.Region("cn-south-1", ["https://cce.cn-south-1.myhuaweicloud.com"]);
CceRegion.CN_SOUTH_2 = new region_1.Region("cn-south-2", ["https://cce.cn-south-2.myhuaweicloud.com"]);
CceRegion.CN_SOUTH_4 = new region_1.Region("cn-south-4", ["https://cce.cn-south-4.myhuaweicloud.com"]);
CceRegion.CN_EAST_2 = new region_1.Region("cn-east-2", ["https://cce.cn-east-2.myhuaweicloud.com"]);
CceRegion.CN_EAST_3 = new region_1.Region("cn-east-3", ["https://cce.cn-east-3.myhuaweicloud.com"]);
CceRegion.CN_SOUTHWEST_2 = new region_1.Region("cn-southwest-2", ["https://cce.cn-southwest-2.myhuaweicloud.com"]);
CceRegion.AP_SOUTHEAST_1 = new region_1.Region("ap-southeast-1", ["https://cce.ap-southeast-1.myhuaweicloud.com"]);
CceRegion.AP_SOUTHEAST_2 = new region_1.Region("ap-southeast-2", ["https://cce.ap-southeast-2.myhuaweicloud.com"]);
CceRegion.AP_SOUTHEAST_3 = new region_1.Region("ap-southeast-3", ["https://cce.ap-southeast-3.myhuaweicloud.com"]);
CceRegion.AF_SOUTH_1 = new region_1.Region("af-south-1", ["https://cce.af-south-1.myhuaweicloud.com"]);
CceRegion.SA_BRAZIL_1 = new region_1.Region("sa-brazil-1", ["https://cce.sa-brazil-1.myhuaweicloud.com"]);
CceRegion.LA_SOUTH_2 = new region_1.Region("la-south-2", ["https://cce.la-south-2.myhuaweicloud.com"]);
CceRegion.LA_NORTH_2 = new region_1.Region("la-north-2", ["https://cce.la-north-2.myhuaweicloud.com"]);
CceRegion.NA_MEXICO_1 = new region_1.Region("na-mexico-1", ["https://cce.na-mexico-1.myhuaweicloud.com"]);
CceRegion.RU_NORTHWEST_2 = new region_1.Region("ru-northwest-2", ["https://cce.ru-northwest-2.myhuaweicloud.com"]);
CceRegion.AP_SOUTHEAST_4 = new region_1.Region("ap-southeast-4", ["https://cce.ap-southeast-4.myhuaweicloud.com"]);
CceRegion.TR_WEST_1 = new region_1.Region("tr-west-1", ["https://cce.tr-west-1.myhuaweicloud.com"]);
CceRegion.AE_AD_1 = new region_1.Region("ae-ad-1", ["https://cce.ae-ad-1.myhuaweicloud.com"]);
CceRegion.EU_WEST_101 = new region_1.Region("eu-west-101", ["https://cce.eu-west-101.myhuaweicloud.eu"]);
CceRegion.CN_NORTH_11 = new region_1.Region("cn-north-11", ["https://cce.cn-north-11.myhuaweicloud.com"]);
CceRegion.REGION_MAP = {
    "cn-north-1": CceRegion.CN_NORTH_1,
    "cn-north-2": CceRegion.CN_NORTH_2,
    "cn-north-4": CceRegion.CN_NORTH_4,
    "cn-north-9": CceRegion.CN_NORTH_9,
    "cn-south-1": CceRegion.CN_SOUTH_1,
    "cn-south-2": CceRegion.CN_SOUTH_2,
    "cn-south-4": CceRegion.CN_SOUTH_4,
    "cn-east-2": CceRegion.CN_EAST_2,
    "cn-east-3": CceRegion.CN_EAST_3,
    "cn-southwest-2": CceRegion.CN_SOUTHWEST_2,
    "ap-southeast-1": CceRegion.AP_SOUTHEAST_1,
    "ap-southeast-2": CceRegion.AP_SOUTHEAST_2,
    "ap-southeast-3": CceRegion.AP_SOUTHEAST_3,
    "af-south-1": CceRegion.AF_SOUTH_1,
    "sa-brazil-1": CceRegion.SA_BRAZIL_1,
    "la-south-2": CceRegion.LA_SOUTH_2,
    "la-north-2": CceRegion.LA_NORTH_2,
    "na-mexico-1": CceRegion.NA_MEXICO_1,
    "ru-northwest-2": CceRegion.RU_NORTHWEST_2,
    "ap-southeast-4": CceRegion.AP_SOUTHEAST_4,
    "tr-west-1": CceRegion.TR_WEST_1,
    "ae-ad-1": CceRegion.AE_AD_1,
    "eu-west-101": CceRegion.EU_WEST_101,
    "cn-north-11": CceRegion.CN_NORTH_11
};
//# sourceMappingURL=CceRegion.js.map