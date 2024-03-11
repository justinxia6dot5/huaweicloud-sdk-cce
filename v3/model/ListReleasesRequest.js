"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReleasesRequest = void 0;
class ListReleasesRequest {
    constructor(contentType, clusterId) {
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    withContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }
    set contentType(contentType) {
        this['Content-Type'] = contentType;
    }
    get contentType() {
        return this['Content-Type'];
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
    withChartId(chartId) {
        this['chart_id'] = chartId;
        return this;
    }
    set chartId(chartId) {
        this['chart_id'] = chartId;
    }
    get chartId() {
        return this['chart_id'];
    }
    withNamespace(namespace) {
        this['namespace'] = namespace;
        return this;
    }
}
exports.ListReleasesRequest = ListReleasesRequest;
//# sourceMappingURL=ListReleasesRequest.js.map