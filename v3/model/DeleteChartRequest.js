"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteChartRequest = void 0;
class DeleteChartRequest {
    constructor(chartId, contentType) {
        this['chart_id'] = chartId;
        this['Content-Type'] = contentType;
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
}
exports.DeleteChartRequest = DeleteChartRequest;
//# sourceMappingURL=DeleteChartRequest.js.map