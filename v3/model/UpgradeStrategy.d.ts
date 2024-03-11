import { InPlaceRollingUpdate } from './InPlaceRollingUpdate';
export declare class UpgradeStrategy {
    type?: string;
    inPlaceRollingUpdate?: InPlaceRollingUpdate;
    constructor(type?: string);
    withType(type: string): UpgradeStrategy;
    withInPlaceRollingUpdate(inPlaceRollingUpdate: InPlaceRollingUpdate): UpgradeStrategy;
}
//# sourceMappingURL=UpgradeStrategy.d.ts.map