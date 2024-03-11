"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatus = void 0;
class DeleteStatus {
    constructor() {
    }
    withPreviousTotal(previousTotal) {
        this['previous_total'] = previousTotal;
        return this;
    }
    set previousTotal(previousTotal) {
        this['previous_total'] = previousTotal;
    }
    get previousTotal() {
        return this['previous_total'];
    }
    withCurrentTotal(currentTotal) {
        this['current_total'] = currentTotal;
        return this;
    }
    set currentTotal(currentTotal) {
        this['current_total'] = currentTotal;
    }
    get currentTotal() {
        return this['current_total'];
    }
    withUpdated(updated) {
        this['updated'] = updated;
        return this;
    }
    withAdded(added) {
        this['added'] = added;
        return this;
    }
    withDeleted(deleted) {
        this['deleted'] = deleted;
        return this;
    }
}
exports.DeleteStatus = DeleteStatus;
//# sourceMappingURL=DeleteStatus.js.map