"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartResp = void 0;
class ChartResp {
    constructor() {
    }
    withId(id) {
        this['id'] = id;
        return this;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withValues(values) {
        this['values'] = values;
        return this;
    }
    withTranslate(translate) {
        this['translate'] = translate;
        return this;
    }
    withInstruction(instruction) {
        this['instruction'] = instruction;
        return this;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withSource(source) {
        this['source'] = source;
        return this;
    }
    withIconUrl(iconUrl) {
        this['icon_url'] = iconUrl;
        return this;
    }
    set iconUrl(iconUrl) {
        this['icon_url'] = iconUrl;
    }
    get iconUrl() {
        return this['icon_url'];
    }
    withPublic(_public) {
        this['public'] = _public;
        return this;
    }
    set _public(_public) {
        this['public'] = _public;
    }
    get _public() {
        return this['public'];
    }
    withChartUrl(chartUrl) {
        this['chart_url'] = chartUrl;
        return this;
    }
    set chartUrl(chartUrl) {
        this['chart_url'] = chartUrl;
    }
    get chartUrl() {
        return this['chart_url'];
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
}
exports.ChartResp = ChartResp;
//# sourceMappingURL=ChartResp.js.map