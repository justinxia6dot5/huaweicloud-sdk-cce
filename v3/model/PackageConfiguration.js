"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageConfiguration = void 0;
class PackageConfiguration {
    constructor() {
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withConfigurations(configurations) {
        this['configurations'] = configurations;
        return this;
    }
}
exports.PackageConfiguration = PackageConfiguration;
//# sourceMappingURL=PackageConfiguration.js.map