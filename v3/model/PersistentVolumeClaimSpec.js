"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentVolumeClaimSpecAccessModesEnum = exports.PersistentVolumeClaimSpec = void 0;
class PersistentVolumeClaimSpec {
    constructor(volumeID, storageType, accessModes) {
        this['volumeID'] = volumeID;
        this['storageType'] = storageType;
        this['accessModes'] = accessModes;
    }
    withVolumeID(volumeID) {
        this['volumeID'] = volumeID;
        return this;
    }
    withStorageType(storageType) {
        this['storageType'] = storageType;
        return this;
    }
    withAccessModes(accessModes) {
        this['accessModes'] = accessModes;
        return this;
    }
    withStorageClassName(storageClassName) {
        this['storageClassName'] = storageClassName;
        return this;
    }
    withVolumeName(volumeName) {
        this['volumeName'] = volumeName;
        return this;
    }
    withResources(resources) {
        this['resources'] = resources;
        return this;
    }
    withVolumeMode(volumeMode) {
        this['volumeMode'] = volumeMode;
        return this;
    }
}
exports.PersistentVolumeClaimSpec = PersistentVolumeClaimSpec;
/**
    * @export
    * @enum {string}
    */
var PersistentVolumeClaimSpecAccessModesEnum;
(function (PersistentVolumeClaimSpecAccessModesEnum) {
    PersistentVolumeClaimSpecAccessModesEnum["READONLYMANY"] = "ReadOnlyMany";
    PersistentVolumeClaimSpecAccessModesEnum["READWRITEMANY"] = "ReadWriteMany";
})(PersistentVolumeClaimSpecAccessModesEnum = exports.PersistentVolumeClaimSpecAccessModesEnum || (exports.PersistentVolumeClaimSpecAccessModesEnum = {}));
//# sourceMappingURL=PersistentVolumeClaimSpec.js.map