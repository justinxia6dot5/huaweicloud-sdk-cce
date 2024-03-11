"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradePath = void 0;
class UpgradePath {
    constructor() {
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withPlatformVersion(platformVersion) {
        this['platformVersion'] = platformVersion;
        return this;
    }
    withTargetVersions(targetVersions) {
        this['targetVersions'] = targetVersions;
        return this;
    }
}
exports.UpgradePath = UpgradePath;
//# sourceMappingURL=UpgradePath.js.map