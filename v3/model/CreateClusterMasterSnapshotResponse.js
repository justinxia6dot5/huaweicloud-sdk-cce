"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClusterMasterSnapshotResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class CreateClusterMasterSnapshotResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withUid(uid) {
        this['uid'] = uid;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
}
exports.CreateClusterMasterSnapshotResponse = CreateClusterMasterSnapshotResponse;
//# sourceMappingURL=CreateClusterMasterSnapshotResponse.js.map