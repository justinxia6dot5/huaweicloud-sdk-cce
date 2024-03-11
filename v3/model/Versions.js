"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Versions = void 0;
class Versions {
    constructor(version, input, stable, translate, supportVersions, updateTimestamp) {
        this['version'] = version;
        this['input'] = input;
        this['stable'] = stable;
        this['translate'] = translate;
        this['supportVersions'] = supportVersions;
        this['updateTimestamp'] = updateTimestamp;
    }
    withVersion(version) {
        this['version'] = version;
        return this;
    }
    withInput(input) {
        this['input'] = input;
        return this;
    }
    withStable(stable) {
        this['stable'] = stable;
        return this;
    }
    withTranslate(translate) {
        this['translate'] = translate;
        return this;
    }
    withSupportVersions(supportVersions) {
        this['supportVersions'] = supportVersions;
        return this;
    }
    withCreationTimestamp(creationTimestamp) {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    withUpdateTimestamp(updateTimestamp) {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}
exports.Versions = Versions;
//# sourceMappingURL=Versions.js.map