export declare class Runtime {
    name?: RuntimeNameEnum | string;
    constructor();
    withName(name: RuntimeNameEnum | string): Runtime;
}
/**
    * @export
    * @enum {string}
    */
export declare enum RuntimeNameEnum {
    DOCKER = "docker",
    CONTAINERD = "containerd"
}
//# sourceMappingURL=Runtime.d.ts.map