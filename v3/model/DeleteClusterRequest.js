"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClusterRequestPeriodicNodePolicyEnum = exports.DeleteClusterRequestOndemandNodePolicyEnum = exports.DeleteClusterRequestTobedeletedEnum = exports.DeleteClusterRequestDeleteSfs30Enum = exports.DeleteClusterRequestDeleteSfsEnum = exports.DeleteClusterRequestDeleteObsEnum = exports.DeleteClusterRequestDeleteNetEnum = exports.DeleteClusterRequestDeleteEvsEnum = exports.DeleteClusterRequestDeleteEniEnum = exports.DeleteClusterRequestDeleteEfsEnum = exports.DeleteClusterRequest = void 0;
class DeleteClusterRequest {
    constructor(clusterId, contentType) {
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    withClusterId(clusterId) {
        this['cluster_id'] = clusterId;
        return this;
    }
    set clusterId(clusterId) {
        this['cluster_id'] = clusterId;
    }
    get clusterId() {
        return this['cluster_id'];
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
    withDeleteEfs(deleteEfs) {
        this['delete_efs'] = deleteEfs;
        return this;
    }
    set deleteEfs(deleteEfs) {
        this['delete_efs'] = deleteEfs;
    }
    get deleteEfs() {
        return this['delete_efs'];
    }
    withDeleteEni(deleteEni) {
        this['delete_eni'] = deleteEni;
        return this;
    }
    set deleteEni(deleteEni) {
        this['delete_eni'] = deleteEni;
    }
    get deleteEni() {
        return this['delete_eni'];
    }
    withDeleteEvs(deleteEvs) {
        this['delete_evs'] = deleteEvs;
        return this;
    }
    set deleteEvs(deleteEvs) {
        this['delete_evs'] = deleteEvs;
    }
    get deleteEvs() {
        return this['delete_evs'];
    }
    withDeleteNet(deleteNet) {
        this['delete_net'] = deleteNet;
        return this;
    }
    set deleteNet(deleteNet) {
        this['delete_net'] = deleteNet;
    }
    get deleteNet() {
        return this['delete_net'];
    }
    withDeleteObs(deleteObs) {
        this['delete_obs'] = deleteObs;
        return this;
    }
    set deleteObs(deleteObs) {
        this['delete_obs'] = deleteObs;
    }
    get deleteObs() {
        return this['delete_obs'];
    }
    withDeleteSfs(deleteSfs) {
        this['delete_sfs'] = deleteSfs;
        return this;
    }
    set deleteSfs(deleteSfs) {
        this['delete_sfs'] = deleteSfs;
    }
    get deleteSfs() {
        return this['delete_sfs'];
    }
    withDeleteSfs30(deleteSfs30) {
        this['delete_sfs30'] = deleteSfs30;
        return this;
    }
    set deleteSfs30(deleteSfs30) {
        this['delete_sfs30'] = deleteSfs30;
    }
    get deleteSfs30() {
        return this['delete_sfs30'];
    }
    withTobedeleted(tobedeleted) {
        this['tobedeleted'] = tobedeleted;
        return this;
    }
    withOndemandNodePolicy(ondemandNodePolicy) {
        this['ondemand_node_policy'] = ondemandNodePolicy;
        return this;
    }
    set ondemandNodePolicy(ondemandNodePolicy) {
        this['ondemand_node_policy'] = ondemandNodePolicy;
    }
    get ondemandNodePolicy() {
        return this['ondemand_node_policy'];
    }
    withPeriodicNodePolicy(periodicNodePolicy) {
        this['periodic_node_policy'] = periodicNodePolicy;
        return this;
    }
    set periodicNodePolicy(periodicNodePolicy) {
        this['periodic_node_policy'] = periodicNodePolicy;
    }
    get periodicNodePolicy() {
        return this['periodic_node_policy'];
    }
}
exports.DeleteClusterRequest = DeleteClusterRequest;
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteEfsEnum;
(function (DeleteClusterRequestDeleteEfsEnum) {
    DeleteClusterRequestDeleteEfsEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteEfsEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteEfsEnum["TRY"] = "try";
    DeleteClusterRequestDeleteEfsEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteEfsEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteEfsEnum = exports.DeleteClusterRequestDeleteEfsEnum || (exports.DeleteClusterRequestDeleteEfsEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteEniEnum;
(function (DeleteClusterRequestDeleteEniEnum) {
    DeleteClusterRequestDeleteEniEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteEniEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteEniEnum["TRY"] = "try";
    DeleteClusterRequestDeleteEniEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteEniEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteEniEnum = exports.DeleteClusterRequestDeleteEniEnum || (exports.DeleteClusterRequestDeleteEniEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteEvsEnum;
(function (DeleteClusterRequestDeleteEvsEnum) {
    DeleteClusterRequestDeleteEvsEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteEvsEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteEvsEnum["TRY"] = "try";
    DeleteClusterRequestDeleteEvsEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteEvsEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteEvsEnum = exports.DeleteClusterRequestDeleteEvsEnum || (exports.DeleteClusterRequestDeleteEvsEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteNetEnum;
(function (DeleteClusterRequestDeleteNetEnum) {
    DeleteClusterRequestDeleteNetEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteNetEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteNetEnum["TRY"] = "try";
    DeleteClusterRequestDeleteNetEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteNetEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteNetEnum = exports.DeleteClusterRequestDeleteNetEnum || (exports.DeleteClusterRequestDeleteNetEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteObsEnum;
(function (DeleteClusterRequestDeleteObsEnum) {
    DeleteClusterRequestDeleteObsEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteObsEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteObsEnum["TRY"] = "try";
    DeleteClusterRequestDeleteObsEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteObsEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteObsEnum = exports.DeleteClusterRequestDeleteObsEnum || (exports.DeleteClusterRequestDeleteObsEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteSfsEnum;
(function (DeleteClusterRequestDeleteSfsEnum) {
    DeleteClusterRequestDeleteSfsEnum["TRUE"] = "true";
    DeleteClusterRequestDeleteSfsEnum["BLOCK"] = "block";
    DeleteClusterRequestDeleteSfsEnum["TRY"] = "try";
    DeleteClusterRequestDeleteSfsEnum["FALSE"] = "false";
    DeleteClusterRequestDeleteSfsEnum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteSfsEnum = exports.DeleteClusterRequestDeleteSfsEnum || (exports.DeleteClusterRequestDeleteSfsEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestDeleteSfs30Enum;
(function (DeleteClusterRequestDeleteSfs30Enum) {
    DeleteClusterRequestDeleteSfs30Enum["TRUE"] = "true";
    DeleteClusterRequestDeleteSfs30Enum["BLOCK"] = "block";
    DeleteClusterRequestDeleteSfs30Enum["TRY"] = "try";
    DeleteClusterRequestDeleteSfs30Enum["FALSE"] = "false";
    DeleteClusterRequestDeleteSfs30Enum["SKIP"] = "skip";
})(DeleteClusterRequestDeleteSfs30Enum = exports.DeleteClusterRequestDeleteSfs30Enum || (exports.DeleteClusterRequestDeleteSfs30Enum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestTobedeletedEnum;
(function (DeleteClusterRequestTobedeletedEnum) {
    DeleteClusterRequestTobedeletedEnum["TRUE"] = "true";
})(DeleteClusterRequestTobedeletedEnum = exports.DeleteClusterRequestTobedeletedEnum || (exports.DeleteClusterRequestTobedeletedEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestOndemandNodePolicyEnum;
(function (DeleteClusterRequestOndemandNodePolicyEnum) {
    DeleteClusterRequestOndemandNodePolicyEnum["DELETE"] = "delete";
    DeleteClusterRequestOndemandNodePolicyEnum["RESET"] = "reset";
    DeleteClusterRequestOndemandNodePolicyEnum["RETAIN"] = "retain";
})(DeleteClusterRequestOndemandNodePolicyEnum = exports.DeleteClusterRequestOndemandNodePolicyEnum || (exports.DeleteClusterRequestOndemandNodePolicyEnum = {}));
/**
    * @export
    * @enum {string}
    */
var DeleteClusterRequestPeriodicNodePolicyEnum;
(function (DeleteClusterRequestPeriodicNodePolicyEnum) {
    DeleteClusterRequestPeriodicNodePolicyEnum["RESET"] = "reset";
    DeleteClusterRequestPeriodicNodePolicyEnum["RETAIN"] = "retain";
})(DeleteClusterRequestPeriodicNodePolicyEnum = exports.DeleteClusterRequestPeriodicNodePolicyEnum || (exports.DeleteClusterRequestPeriodicNodePolicyEnum = {}));
//# sourceMappingURL=DeleteClusterRequest.js.map