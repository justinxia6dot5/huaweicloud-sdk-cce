"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeMetadata = void 0;
class VolumeMetadata {
    constructor() {
    }
    withSystemEncrypted(systemEncrypted) {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    set systemEncrypted(systemEncrypted) {
        this['__system__encrypted'] = systemEncrypted;
    }
    get systemEncrypted() {
        return this['__system__encrypted'];
    }
    withSystemCmkid(systemCmkid) {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    set systemCmkid(systemCmkid) {
        this['__system__cmkid'] = systemCmkid;
    }
    get systemCmkid() {
        return this['__system__cmkid'];
    }
}
exports.VolumeMetadata = VolumeMetadata;
//# sourceMappingURL=VolumeMetadata.js.map