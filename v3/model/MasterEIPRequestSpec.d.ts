import { MasterEIPRequestSpecSpec } from './MasterEIPRequestSpecSpec';
export declare class MasterEIPRequestSpec {
    action?: MasterEIPRequestSpecActionEnum | string;
    spec?: MasterEIPRequestSpecSpec;
    bandwidth?: string;
    elasticIp?: string;
    constructor();
    withAction(action: MasterEIPRequestSpecActionEnum | string): MasterEIPRequestSpec;
    withSpec(spec: MasterEIPRequestSpecSpec): MasterEIPRequestSpec;
    withBandwidth(bandwidth: string): MasterEIPRequestSpec;
    withElasticIp(elasticIp: string): MasterEIPRequestSpec;
}
/**
    * @export
    * @enum {string}
    */
export declare enum MasterEIPRequestSpecActionEnum {
    BIND = "bind",
    UNBIND = "unbind"
}
//# sourceMappingURL=MasterEIPRequestSpec.d.ts.map