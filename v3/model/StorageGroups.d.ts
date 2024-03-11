import { VirtualSpace } from './VirtualSpace';
export declare class StorageGroups {
    name?: string;
    cceManaged?: boolean;
    selectorNames?: Array<string>;
    virtualSpaces?: Array<VirtualSpace>;
    constructor(name?: string, selectorNames?: Array<string>, virtualSpaces?: Array<VirtualSpace>);
    withName(name: string): StorageGroups;
    withCceManaged(cceManaged: boolean): StorageGroups;
    withSelectorNames(selectorNames: Array<string>): StorageGroups;
    withVirtualSpaces(virtualSpaces: Array<VirtualSpace>): StorageGroups;
}
//# sourceMappingURL=StorageGroups.d.ts.map