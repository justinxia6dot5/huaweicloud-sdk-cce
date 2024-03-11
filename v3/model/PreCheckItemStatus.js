"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreCheckItemStatus = void 0;
class PreCheckItemStatus {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withKind(kind) {
        this['kind'] = kind;
        return this;
    }
    withGroup(group) {
        this['group'] = group;
        return this;
    }
    withLevel(level) {
        this['level'] = level;
        return this;
    }
    withPhase(phase) {
        this['phase'] = phase;
        return this;
    }
    withMessage(message) {
        this['message'] = message;
        return this;
    }
    withRiskSource(riskSource) {
        this['riskSource'] = riskSource;
        return this;
    }
    withErrorCodes(errorCodes) {
        this['errorCodes'] = errorCodes;
        return this;
    }
}
exports.PreCheckItemStatus = PreCheckItemStatus;
//# sourceMappingURL=PreCheckItemStatus.js.map