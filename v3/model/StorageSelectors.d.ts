import { StorageSelectorsMatchLabels } from './StorageSelectorsMatchLabels';
export declare class StorageSelectors {
    name?: string;
    storageType?: string;
    matchLabels?: StorageSelectorsMatchLabels;
    constructor(name?: string, storageType?: string);
    withName(name: string): StorageSelectors;
    withStorageType(storageType: string): StorageSelectors;
    withMatchLabels(matchLabels: StorageSelectorsMatchLabels): StorageSelectors;
}
//# sourceMappingURL=StorageSelectors.d.ts.map