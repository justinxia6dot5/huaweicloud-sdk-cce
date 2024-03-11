"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterEIPResponseSpecSpec = void 0;
class MasterEIPResponseSpecSpec {
    constructor() {
    }
    withId(id) {
        this['id'] = id;
        return this;
    }
    withEip(eip) {
        this['eip'] = eip;
        return this;
    }
    withIsDynamic(isDynamic) {
        this['IsDynamic'] = isDynamic;
        return this;
    }
    set isDynamic(isDynamic) {
        this['IsDynamic'] = isDynamic;
    }
    get isDynamic() {
        return this['IsDynamic'];
    }
}
exports.MasterEIPResponseSpecSpec = MasterEIPResponseSpecSpec;
//# sourceMappingURL=MasterEIPResponseSpecSpec.js.map