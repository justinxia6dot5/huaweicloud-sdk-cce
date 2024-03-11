import { ContainerCIDR } from './ContainerCIDR';
export declare class ContainerNetwork {
    mode?: ContainerNetworkModeEnum | string;
    cidr?: string;
    cidrs?: Array<ContainerCIDR>;
    constructor(mode?: string);
    withMode(mode: ContainerNetworkModeEnum | string): ContainerNetwork;
    withCidr(cidr: string): ContainerNetwork;
    withCidrs(cidrs: Array<ContainerCIDR>): ContainerNetwork;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ContainerNetworkModeEnum {
    OVERLAY_L2 = "overlay_l2",
    VPC_ROUTER = "vpc-router",
    ENI = "eni"
}
//# sourceMappingURL=ContainerNetwork.d.ts.map