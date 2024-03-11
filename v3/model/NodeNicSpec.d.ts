import { NicSpec } from './NicSpec';
export declare class NodeNicSpec {
    primaryNic?: NicSpec;
    extNics?: Array<NicSpec>;
    constructor();
    withPrimaryNic(primaryNic: NicSpec): NodeNicSpec;
    withExtNics(extNics: Array<NicSpec>): NodeNicSpec;
}
//# sourceMappingURL=NodeNicSpec.d.ts.map