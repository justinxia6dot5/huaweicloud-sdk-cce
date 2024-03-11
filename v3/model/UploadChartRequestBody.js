"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadChartRequestBody = void 0;
class UploadChartRequestBody {
    constructor(content) {
        this['content'] = content;
    }
    withParameters(parameters) {
        this['parameters'] = parameters;
        return this;
    }
    withContent(content) {
        this['content'] = content;
        return this;
    }
}
exports.UploadChartRequestBody = UploadChartRequestBody;
//# sourceMappingURL=UploadChartRequestBody.js.map