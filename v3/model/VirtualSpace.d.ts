import { LVMConfig } from './LVMConfig';
import { RuntimeConfig } from './RuntimeConfig';
export declare class VirtualSpace {
    name?: string;
    size?: string;
    lvmConfig?: LVMConfig;
    runtimeConfig?: RuntimeConfig;
    constructor(name?: string, size?: string);
    withName(name: string): VirtualSpace;
    withSize(size: string): VirtualSpace;
    withLvmConfig(lvmConfig: LVMConfig): VirtualSpace;
    withRuntimeConfig(runtimeConfig: RuntimeConfig): VirtualSpace;
}
//# sourceMappingURL=VirtualSpace.d.ts.map