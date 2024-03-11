export declare class ResourceSelector {
    key?: ResourceSelectorKeyEnum | string;
    values?: Array<string>;
    operator?: ResourceSelectorOperatorEnum | string;
    constructor(key?: string, operator?: string);
    withKey(key: ResourceSelectorKeyEnum | string): ResourceSelector;
    withValues(values: Array<string>): ResourceSelector;
    withOperator(operator: ResourceSelectorOperatorEnum | string): ResourceSelector;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResourceSelectorKeyEnum {
    NODE_UID = "node.uid"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResourceSelectorOperatorEnum {
    IN = "In"
}
//# sourceMappingURL=ResourceSelector.d.ts.map