"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReleaseReqBodyActionEnum = exports.UpdateReleaseReqBody = void 0;
class UpdateReleaseReqBody {
    constructor(chartId, action, parameters, values) {
        this['chart_id'] = chartId;
        this['action'] = action;
        this['parameters'] = parameters;
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
    withAction(action) {
        this['action'] = action;
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
exports.UpdateReleaseReqBody = UpdateReleaseReqBody;
/**
    * @export
    * @enum {string}
    */
var UpdateReleaseReqBodyActionEnum;
(function (UpdateReleaseReqBodyActionEnum) {
    UpdateReleaseReqBodyActionEnum["UPGRADE"] = "upgrade";
    UpdateReleaseReqBodyActionEnum["ROLLBACK"] = "rollback";
})(UpdateReleaseReqBodyActionEnum = exports.UpdateReleaseReqBodyActionEnum || (exports.UpdateReleaseReqBodyActionEnum = {}));
//# sourceMappingURL=UpdateReleaseReqBody.js.map