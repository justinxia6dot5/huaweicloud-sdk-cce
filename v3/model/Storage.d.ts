import { StorageGroups } from './StorageGroups';
import { StorageSelectors } from './StorageSelectors';
export declare class Storage {
    storageSelectors?: Array<StorageSelectors>;
    storageGroups?: Array<StorageGroups>;
    constructor(storageSelectors?: Array<StorageSelectors>, storageGroups?: Array<StorageGroups>);
    withStorageSelectors(storageSelectors: Array<StorageSelectors>): Storage;
    withStorageGroups(storageGroups: Array<StorageGroups>): Storage;
}
//# sourceMappingURL=Storage.d.ts.map