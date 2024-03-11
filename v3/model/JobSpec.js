"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSpec = void 0;
class JobSpec {
    constructor() {
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withClusterUID(clusterUID) {
        this['clusterUID'] = clusterUID;
        return this;
    }
    withResourceID(resourceID) {
        this['resourceID'] = resourceID;
        return this;
    }
    withResourceName(resourceName) {
        this['resourceName'] = resourceName;
        return this;
    }
    withExtendParam(extendParam) {
        this['extendParam'] = extendParam;
        return this;
    }
    withSubJobs(subJobs) {
        this['subJobs'] = subJobs;
        return this;
    }
}
exports.JobSpec = JobSpec;
//# sourceMappingURL=JobSpec.js.map