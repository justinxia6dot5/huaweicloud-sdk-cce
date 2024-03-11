export declare class HostNetwork {
    vpc?: string;
    subnet?: string;
    private 'SecurityGroup'?;
    constructor(vpc?: string, subnet?: string);
    withVpc(vpc: string): HostNetwork;
    withSubnet(subnet: string): HostNetwork;
    withSecurityGroup(securityGroup: string): HostNetwork;
    set securityGroup(securityGroup: string | undefined);
    get securityGroup(): string | undefined;
}
//# sourceMappingURL=HostNetwork.d.ts.map