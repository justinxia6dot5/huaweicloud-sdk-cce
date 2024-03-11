export declare class APIVersionLink {
    href?: string;
    rel?: APIVersionLinkRelEnum | string;
    constructor(href?: string, rel?: string);
    withHref(href: string): APIVersionLink;
    withRel(rel: APIVersionLinkRelEnum | string): APIVersionLink;
}
/**
    * @export
    * @enum {string}
    */
export declare enum APIVersionLinkRelEnum {
    SELF = "self"
}
//# sourceMappingURL=APIVersionLink.d.ts.map