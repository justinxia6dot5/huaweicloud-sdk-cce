"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReleaseResponse = void 0;
const SdkResponse_1 = require("@huaweicloud/huaweicloud-sdk-core/SdkResponse");
class CreateReleaseResponse extends SdkResponse_1.SdkResponse {
    constructor() {
        super();
    }
    withChartName(chartName) {
        this['chart_name'] = chartName;
        return this;
    }
    set chartName(chartName) {
        this['chart_name'] = chartName;
    }
    get chartName() {
        return this['chart_name'];
    }
    withChartPublic(chartPublic) {
        this['chart_public'] = chartPublic;
        return this;
    }
    set chartPublic(chartPublic) {
        this['chart_public'] = chartPublic;
    }
    get chartPublic() {
        return this['chart_public'];
    }
    withChartVersion(chartVersion) {
        this['chart_version'] = chartVersion;
        return this;
    }
    set chartVersion(chartVersion) {
        this['chart_version'] = chartVersion;
    }
    get chartVersion() {
        return this['chart_version'];
    }
    withClusterId(clusterId) {
        this['cluster_id'] = clusterId;
        return this;
    }
    set clusterId(clusterId) {
        this['cluster_id'] = clusterId;
    }
    get clusterId() {
        return this['cluster_id'];
    }
    withClusterName(clusterName) {
        this['cluster_name'] = clusterName;
        return this;
    }
    set clusterName(clusterName) {
        this['cluster_name'] = clusterName;
    }
    get clusterName() {
        return this['cluster_name'];
    }
    withCreateAt(createAt) {
        this['create_at'] = createAt;
        return this;
    }
    set createAt(createAt) {
        this['create_at'] = createAt;
    }
    get createAt() {
        return this['create_at'];
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withNamespace(namespace) {
        this['namespace'] = namespace;
        return this;
    }
    withParameters(parameters) {
        this['parameters'] = parameters;
        return this;
    }
    withResources(resources) {
        this['resources'] = resources;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
        return this;
    }
    withStatusDescription(statusDescription) {
        this['status_description'] = statusDescription;
        return this;
    }
    set statusDescription(statusDescription) {
        this['status_description'] = statusDescription;
    }
    get statusDescription() {
        return this['status_description'];
    }
    withUpdateAt(updateAt) {
        this['update_at'] = updateAt;
        return this;
    }
    set updateAt(updateAt) {
        this['update_at'] = updateAt;
    }
    get updateAt() {
        return this['update_at'];
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
}
exports.CreateReleaseResponse = CreateReleaseResponse;
//# sourceMappingURL=CreateReleaseResponse.js.map