export declare class HostnameConfig {
    type?: HostnameConfigTypeEnum | string;
    constructor(type?: string);
    withType(type: HostnameConfigTypeEnum | string): HostnameConfig;
}
/**
    * @export
    * @enum {string}
    */
export declare enum HostnameConfigTypeEnum {
    PRIVATEIP = "privateIp",
    CCENODENAME = "cceNodeName"
}
//# sourceMappingURL=HostnameConfig.d.ts.map