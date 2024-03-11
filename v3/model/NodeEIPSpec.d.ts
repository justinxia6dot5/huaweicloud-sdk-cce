import { NodeBandwidth } from './NodeBandwidth';
export declare class NodeEIPSpec {
    iptype?: string;
    bandwidth?: NodeBandwidth;
    constructor(iptype?: string);
    withIptype(iptype: string): NodeEIPSpec;
    withBandwidth(bandwidth: NodeBandwidth): NodeEIPSpec;
}
//# sourceMappingURL=NodeEIPSpec.d.ts.map