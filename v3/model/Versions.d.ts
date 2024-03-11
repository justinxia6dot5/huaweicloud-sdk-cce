import { SupportVersions } from './SupportVersions';
export declare class Versions {
    version?: string;
    input?: object;
    stable?: boolean;
    translate?: object;
    supportVersions?: Array<SupportVersions>;
    creationTimestamp?: string;
    updateTimestamp?: string;
    constructor(version?: string, input?: object, stable?: boolean, translate?: object, supportVersions?: Array<SupportVersions>, updateTimestamp?: string);
    withVersion(version: string): Versions;
    withInput(input: object): Versions;
    withStable(stable: boolean): Versions;
    withTranslate(translate: object): Versions;
    withSupportVersions(supportVersions: Array<SupportVersions>): Versions;
    withCreationTimestamp(creationTimestamp: string): Versions;
    withUpdateTimestamp(updateTimestamp: string): Versions;
}
//# sourceMappingURL=Versions.d.ts.map