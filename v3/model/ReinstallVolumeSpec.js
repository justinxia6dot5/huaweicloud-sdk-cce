"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstallVolumeSpec = void 0;
class ReinstallVolumeSpec {
    constructor() {
    }
    withImageID(imageID) {
        this['imageID'] = imageID;
        return this;
    }
    withCmkID(cmkID) {
        this['cmkID'] = cmkID;
        return this;
    }
}
exports.ReinstallVolumeSpec = ReinstallVolumeSpec;
//# sourceMappingURL=ReinstallVolumeSpec.js.map