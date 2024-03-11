export declare class NodeSelector {
    key?: string;
    value?: Array<string>;
    operator?: string;
    constructor(key?: string, operator?: string);
    withKey(key: string): NodeSelector;
    withValue(value: Array<string>): NodeSelector;
    withOperator(operator: string): NodeSelector;
}
//# sourceMappingURL=NodeSelector.d.ts.map