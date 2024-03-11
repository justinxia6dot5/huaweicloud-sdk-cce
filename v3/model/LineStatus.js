"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineStatus = void 0;
class LineStatus {
    constructor() {
    }
    withStartPoint(startPoint) {
        this['startPoint'] = startPoint;
        return this;
    }
    withEndPoint(endPoint) {
        this['endPoint'] = endPoint;
        return this;
    }
    withCritical(critical) {
        this['critical'] = critical;
        return this;
    }
}
exports.LineStatus = LineStatus;
//# sourceMappingURL=LineStatus.js.map