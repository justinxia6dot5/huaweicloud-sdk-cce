"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSpecItems = void 0;
class SnapshotSpecItems {
    constructor() {
    }
    withId(id) {
        this['id'] = id;
        return this;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withStatus(status) {
        this['status'] = status;
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
    withMessage(message) {
        this['message'] = message;
        return this;
    }
}
exports.SnapshotSpecItems = SnapshotSpecItems;
//# sourceMappingURL=SnapshotSpecItems.js.map