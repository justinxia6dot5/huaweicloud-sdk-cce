"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPISpecSpec = void 0;
class OpenAPISpecSpec {
    constructor() {
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
exports.OpenAPISpecSpec = OpenAPISpecSpec;
//# sourceMappingURL=OpenAPISpecSpec.js.map