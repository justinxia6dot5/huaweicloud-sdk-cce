"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageSelectors = void 0;
class StorageSelectors {
    constructor(name, storageType) {
        this['name'] = name;
        this['storageType'] = storageType;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withStorageType(storageType) {
        this['storageType'] = storageType;
        return this;
    }
    withMatchLabels(matchLabels) {
        this['matchLabels'] = matchLabels;
        return this;
    }
}
exports.StorageSelectors = StorageSelectors;
//# sourceMappingURL=StorageSelectors.js.map