"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClusterMasterSnapshotTasksResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class ListClusterMasterSnapshotTasksResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withApiVersion(apiVersion) {
        this['apiVersion'] = apiVersion;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withMetadata(metadata) {
        this['metadata'] = metadata;
        return this;
    }
    withItems(items) {
        this['items'] = items;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
}
exports.ListClusterMasterSnapshotTasksResponse = ListClusterMasterSnapshotTasksResponse;
//# sourceMappingURL=ListClusterMasterSnapshotTasksResponse.js.map