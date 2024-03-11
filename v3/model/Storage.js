"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
class Storage {
    constructor(storageSelectors, storageGroups) {
        this['storageSelectors'] = storageSelectors;
        this['storageGroups'] = storageGroups;
    }
    withStorageSelectors(storageSelectors) {
        this['storageSelectors'] = storageSelectors;
        return this;
    }
    withStorageGroups(storageGroups) {
        this['storageGroups'] = storageGroups;
        return this;
    }
}
exports.Storage = Storage;
//# sourceMappingURL=Storage.js.map