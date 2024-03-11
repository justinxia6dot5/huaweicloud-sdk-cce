import { MasterEIPResponseSpecSpec } from './MasterEIPResponseSpecSpec';
export declare class MasterEIPResponseSpec {
    action?: MasterEIPResponseSpecActionEnum | string;
    spec?: MasterEIPResponseSpecSpec;
    elasticIp?: string;
    constructor();
    withAction(action: MasterEIPResponseSpecActionEnum | string): MasterEIPResponseSpec;
    withSpec(spec: MasterEIPResponseSpecSpec): MasterEIPResponseSpec;
    withElasticIp(elasticIp: string): MasterEIPResponseSpec;
}
/**
    * @export
    * @enum {string}
    */
export declare enum MasterEIPResponseSpecActionEnum {
    BIND = "bind"
}
//# sourceMappingURL=MasterEIPResponseSpec.d.ts.map