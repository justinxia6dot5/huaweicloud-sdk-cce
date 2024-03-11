export declare class PackageOptions {
    name?: string;
    private 'default'?;
    validAt?: PackageOptionsValidAtEnum | string;
    empty?: boolean;
    schema?: string;
    type?: string;
    constructor(name?: string, _default?: string, validAt?: string, empty?: boolean, schema?: string, type?: string);
    withName(name: string): PackageOptions;
    withDefault(_default: string): PackageOptions;
    set _default(_default: string | undefined);
    get _default(): string | undefined;
    withValidAt(validAt: PackageOptionsValidAtEnum | string): PackageOptions;
    withEmpty(empty: boolean): PackageOptions;
    withSchema(schema: string): PackageOptions;
    withType(type: string): PackageOptions;
}
/**
    * @export
    * @enum {string}
    */
export declare enum PackageOptionsValidAtEnum {
    STATIC = "static",
    IMMEDIATELY = "immediately"
}
//# sourceMappingURL=PackageOptions.d.ts.map