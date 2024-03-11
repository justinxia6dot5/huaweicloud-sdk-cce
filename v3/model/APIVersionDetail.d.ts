import { APIVersionLink } from './APIVersionLink';
export declare class APIVersionDetail {
    id?: string;
    links?: Array<APIVersionLink>;
    private 'min_version'?;
    status?: APIVersionDetailStatusEnum | string;
    updated?: string;
    version?: string;
    constructor(id?: string, links?: Array<APIVersionLink>, minVersion?: string, status?: string, updated?: string, version?: string);
    withId(id: string): APIVersionDetail;
    withLinks(links: Array<APIVersionLink>): APIVersionDetail;
    withMinVersion(minVersion: string): APIVersionDetail;
    set minVersion(minVersion: string | undefined);
    get minVersion(): string | undefined;
    withStatus(status: APIVersionDetailStatusEnum | string): APIVersionDetail;
    withUpdated(updated: string): APIVersionDetail;
    withVersion(version: string): APIVersionDetail;
}
/**
    * @export
    * @enum {string}
    */
export declare enum APIVersionDetailStatusEnum {
    CURRENT = "CURRENT",
    SUPPORTED = "SUPPORTED",
    DEPRECATED = "DEPRECATED"
}
//# sourceMappingURL=APIVersionDetail.d.ts.map