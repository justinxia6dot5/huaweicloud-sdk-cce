"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReleaseReqBodyValues = void 0;
class CreateReleaseReqBodyValues {
    constructor() {
    }
    withImagePullPolicy(imagePullPolicy) {
        this['imagePullPolicy'] = imagePullPolicy;
        return this;
    }
    withImageTag(imageTag) {
        this['imageTag'] = imageTag;
        return this;
    }
}
exports.CreateReleaseReqBodyValues = CreateReleaseReqBodyValues;
//# sourceMappingURL=CreateReleaseReqBodyValues.js.map