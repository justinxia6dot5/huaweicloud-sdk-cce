"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contexts = void 0;
class Contexts {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withContext(context) {
        this['context'] = context;
        return this;
    }
}
exports.Contexts = Contexts;
//# sourceMappingURL=Contexts.js.map