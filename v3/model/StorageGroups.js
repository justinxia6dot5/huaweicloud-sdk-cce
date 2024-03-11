"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageGroups = void 0;
class StorageGroups {
    constructor(name, selectorNames, virtualSpaces) {
        this['name'] = name;
        this['selectorNames'] = selectorNames;
        this['virtualSpaces'] = virtualSpaces;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withCceManaged(cceManaged) {
        this['cceManaged'] = cceManaged;
        return this;
    }
    withSelectorNames(selectorNames) {
        this['selectorNames'] = selectorNames;
        return this;
    }
    withVirtualSpaces(virtualSpaces) {
        this['virtualSpaces'] = virtualSpaces;
        return this;
    }
}
exports.StorageGroups = StorageGroups;
//# sourceMappingURL=StorageGroups.js.map