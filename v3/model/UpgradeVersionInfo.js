"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeVersionInfo = void 0;
class UpgradeVersionInfo {
    constructor() {
    }
    withRelease(release) {
        this['release'] = release;
        return this;
    }
    withPatch(patch) {
        this['patch'] = patch;
        return this;
    }
    withSuggestPatch(suggestPatch) {
        this['suggestPatch'] = suggestPatch;
        return this;
    }
    withTargetVersions(targetVersions) {
        this['targetVersions'] = targetVersions;
        return this;
    }
}
exports.UpgradeVersionInfo = UpgradeVersionInfo;
//# sourceMappingURL=UpgradeVersionInfo.js.map