"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageSelectorsMatchLabels = void 0;
class StorageSelectorsMatchLabels {
    constructor() {
    }
    withSize(size) {
        this['size'] = size;
        return this;
    }
    withVolumeType(volumeType) {
        this['volumeType'] = volumeType;
        return this;
    }
    withMetadataEncrypted(metadataEncrypted) {
        this['metadataEncrypted'] = metadataEncrypted;
        return this;
    }
    withMetadataCmkid(metadataCmkid) {
        this['metadataCmkid'] = metadataCmkid;
        return this;
    }
    withCount(count) {
        this['count'] = count;
        return this;
    }
}
exports.StorageSelectorsMatchLabels = StorageSelectorsMatchLabels;
//# sourceMappingURL=StorageSelectorsMatchLabels.js.map