"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    constructor() {
    }
    withCluster(cluster) {
        this['cluster'] = cluster;
        return this;
    }
    withUser(user) {
        this['user'] = user;
        return this;
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map