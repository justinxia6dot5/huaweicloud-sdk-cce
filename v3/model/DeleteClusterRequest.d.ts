export declare class DeleteClusterRequest {
    private 'cluster_id'?;
    private 'Content-Type'?;
    private 'delete_efs'?;
    private 'delete_eni'?;
    private 'delete_evs'?;
    private 'delete_net'?;
    private 'delete_obs'?;
    private 'delete_sfs'?;
    private 'delete_sfs30'?;
    tobedeleted?: DeleteClusterRequestTobedeletedEnum | string;
    private 'ondemand_node_policy'?;
    private 'periodic_node_policy'?;
    constructor(clusterId?: string, contentType?: string);
    withClusterId(clusterId: string): DeleteClusterRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withContentType(contentType: string): DeleteClusterRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withDeleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum | string): DeleteClusterRequest;
    set deleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum | string | undefined);
    get deleteEfs(): DeleteClusterRequestDeleteEfsEnum | string | undefined;
    withDeleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum | string): DeleteClusterRequest;
    set deleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum | string | undefined);
    get deleteEni(): DeleteClusterRequestDeleteEniEnum | string | undefined;
    withDeleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum | string): DeleteClusterRequest;
    set deleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum | string | undefined);
    get deleteEvs(): DeleteClusterRequestDeleteEvsEnum | string | undefined;
    withDeleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum | string): DeleteClusterRequest;
    set deleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum | string | undefined);
    get deleteNet(): DeleteClusterRequestDeleteNetEnum | string | undefined;
    withDeleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum | string): DeleteClusterRequest;
    set deleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum | string | undefined);
    get deleteObs(): DeleteClusterRequestDeleteObsEnum | string | undefined;
    withDeleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum | string): DeleteClusterRequest;
    set deleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum | string | undefined);
    get deleteSfs(): DeleteClusterRequestDeleteSfsEnum | string | undefined;
    withDeleteSfs30(deleteSfs30: DeleteClusterRequestDeleteSfs30Enum | string): DeleteClusterRequest;
    set deleteSfs30(deleteSfs30: DeleteClusterRequestDeleteSfs30Enum | string | undefined);
    get deleteSfs30(): DeleteClusterRequestDeleteSfs30Enum | string | undefined;
    withTobedeleted(tobedeleted: DeleteClusterRequestTobedeletedEnum | string): DeleteClusterRequest;
    withOndemandNodePolicy(ondemandNodePolicy: DeleteClusterRequestOndemandNodePolicyEnum | string): DeleteClusterRequest;
    set ondemandNodePolicy(ondemandNodePolicy: DeleteClusterRequestOndemandNodePolicyEnum | string | undefined);
    get ondemandNodePolicy(): DeleteClusterRequestOndemandNodePolicyEnum | string | undefined;
    withPeriodicNodePolicy(periodicNodePolicy: DeleteClusterRequestPeriodicNodePolicyEnum | string): DeleteClusterRequest;
    set periodicNodePolicy(periodicNodePolicy: DeleteClusterRequestPeriodicNodePolicyEnum | string | undefined);
    get periodicNodePolicy(): DeleteClusterRequestPeriodicNodePolicyEnum | string | undefined;
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteEfsEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteEniEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteEvsEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteNetEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteObsEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteSfsEnum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestDeleteSfs30Enum {
    TRUE = "true",
    BLOCK = "block",
    TRY = "try",
    FALSE = "false",
    SKIP = "skip"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestTobedeletedEnum {
    TRUE = "true"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestOndemandNodePolicyEnum {
    DELETE = "delete",
    RESET = "reset",
    RETAIN = "retain"
}
/**
    * @export
    * @enum {string}
    */
export declare enum DeleteClusterRequestPeriodicNodePolicyEnum {
    RESET = "reset",
    RETAIN = "retain"
}
//# sourceMappingURL=DeleteClusterRequest.d.ts.map