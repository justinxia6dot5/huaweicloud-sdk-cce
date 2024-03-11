"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigDetailRespBody = void 0;
PackageOptions_1.PackageOptions & gt;
from;
'./Array&lt;PackageOptions&gt;';
const PackageOptions_1 = require("./PackageOptions");
class ClusterConfigDetailRespBody {
    constructor() {
    }
    withKubeApiserver(kubeApiserver) {
        this['kube-apiserver'] = kubeApiserver;
        return this;
    }
    set kubeApiserver(kubeApiserver) {
        this['kube-apiserver'] = kubeApiserver;
    }
    get kubeApiserver() {
        return this['kube-apiserver'];
    }
}
exports.ClusterConfigDetailRespBody = ClusterConfigDetailRespBody;
//# sourceMappingURL=ClusterConfigDetailRespBody.js.map