"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReleaseReqBody = void 0;
class CreateReleaseReqBody {
    constructor(chartId, name, namespace, version, values) {
        this['chart_id'] = chartId;
        this['name'] = name;
        this['namespace'] = namespace;
        this['version'] = version;
        this['values'] = values;
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
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withParameters(parameters) {
        this['parameters'] = parameters;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
}
exports.CreateReleaseReqBody = CreateReleaseReqBody;
//# sourceMappingURL=CreateReleaseReqBody.js.map