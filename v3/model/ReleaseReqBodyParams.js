"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseReqBodyParams = void 0;
class ReleaseReqBodyParams {
    constructor() {
    }
    withDryRun(dryRun) {
        this['dry_run'] = dryRun;
        return this;
    }
    set dryRun(dryRun) {
        this['dry_run'] = dryRun;
    }
    get dryRun() {
        return this['dry_run'];
    }
    withNameTemplate(nameTemplate) {
        this['name_template'] = nameTemplate;
        return this;
    }
    set nameTemplate(nameTemplate) {
        this['name_template'] = nameTemplate;
    }
    get nameTemplate() {
        return this['name_template'];
    }
    withNoHooks(noHooks) {
        this['no_hooks'] = noHooks;
        return this;
    }
    set noHooks(noHooks) {
        this['no_hooks'] = noHooks;
    }
    get noHooks() {
        return this['no_hooks'];
    }
    withReplace(replace) {
        this['replace'] = replace;
        return this;
    }
    withRecreate(recreate) {
        this['recreate'] = recreate;
        return this;
    }
    withResetValues(resetValues) {
        this['reset_values'] = resetValues;
        return this;
    }
    set resetValues(resetValues) {
        this['reset_values'] = resetValues;
    }
    get resetValues() {
        return this['reset_values'];
    }
    withReleaseVersion(releaseVersion) {
        this['release_version'] = releaseVersion;
        return this;
    }
    set releaseVersion(releaseVersion) {
        this['release_version'] = releaseVersion;
    }
    get releaseVersion() {
        return this['release_version'];
    }
    withIncludeHooks(includeHooks) {
        this['include_hooks'] = includeHooks;
        return this;
    }
    set includeHooks(includeHooks) {
        this['include_hooks'] = includeHooks;
    }
    get includeHooks() {
        return this['include_hooks'];
    }
}
exports.ReleaseReqBodyParams = ReleaseReqBodyParams;
//# sourceMappingURL=ReleaseReqBodyParams.js.map