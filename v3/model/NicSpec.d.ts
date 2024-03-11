export declare class NicSpec {
    subnetId?: string;
    fixedIps?: Array<string>;
    ipBlock?: string;
    constructor();
    withSubnetId(subnetId: string): NicSpec;
    withFixedIps(fixedIps: Array<string>): NicSpec;
    withIpBlock(ipBlock: string): NicSpec;
}
//# sourceMappingURL=NicSpec.d.ts.map