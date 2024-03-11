import { NetworkSubnet } from './NetworkSubnet';
export declare class EniNetwork {
    eniSubnetId?: string;
    eniSubnetCIDR?: string;
    subnets?: Array<NetworkSubnet>;
    constructor(eniSubnetId?: string, eniSubnetCIDR?: string, subnets?: Array<NetworkSubnet>);
    withEniSubnetId(eniSubnetId: string): EniNetwork;
    withEniSubnetCIDR(eniSubnetCIDR: string): EniNetwork;
    withSubnets(subnets: Array<NetworkSubnet>): EniNetwork;
}
//# sourceMappingURL=EniNetwork.d.ts.map