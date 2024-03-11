"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InPlaceRollingUpdate = void 0;
class InPlaceRollingUpdate {
    constructor() {
    }
    withUserDefinedStep(userDefinedStep) {
        this['userDefinedStep'] = userDefinedStep;
        return this;
    }
}
exports.InPlaceRollingUpdate = InPlaceRollingUpdate;
//# sourceMappingURL=InPlaceRollingUpdate.js.map