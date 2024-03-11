import { NodeEIPSpec } from './NodeEIPSpec';
export declare class NodePublicIP {
    ids?: Array<string>;
    count?: number;
    eip?: NodeEIPSpec;
    constructor();
    withIds(ids: Array<string>): NodePublicIP;
    withCount(count: number): NodePublicIP;
    withEip(eip: NodeEIPSpec): NodePublicIP;
}
//# sourceMappingURL=NodePublicIP.d.ts.map