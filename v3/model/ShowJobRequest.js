"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowJobRequest = void 0;
class ShowJobRequest {
    constructor(jobId, contentType) {
        this['job_id'] = jobId;
        this['Content-Type'] = contentType;
    }
    withJobId(jobId) {
        this['job_id'] = jobId;
        return this;
    }
    set jobId(jobId) {
        this['job_id'] = jobId;
    }
    get jobId() {
        return this['job_id'];
    }
    withContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }
    set contentType(contentType) {
        this['Content-Type'] = contentType;
    }
    get contentType() {
        return this['Content-Type'];
    }
}
exports.ShowJobRequest = ShowJobRequest;
//# sourceMappingURL=ShowJobRequest.js.map