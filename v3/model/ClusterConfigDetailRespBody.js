"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigDetailRespBody = void 0;
class ClusterConfigDetailRespBody {
  constructor() {}
  withKubeApiserver(kubeApiserver) {
    this["kube-apiserver"] = kubeApiserver;
    return this;
  }
  set kubeApiserver(kubeApiserver) {
    this["kube-apiserver"] = kubeApiserver;
  }
  get kubeApiserver() {
    return this["kube-apiserver"];
  }
}
exports.ClusterConfigDetailRespBody = ClusterConfigDetailRespBody;
//# sourceMappingURL=ClusterConfigDetailRespBody.js.map
