import { EipSpec } from './EipSpec';
export declare class OpenAPISpecSpec {
    eip?: EipSpec;
    private 'IsDynamic'?;
    constructor();
    withEip(eip: EipSpec): OpenAPISpecSpec;
    withIsDynamic(isDynamic: boolean): OpenAPISpecSpec;
    set isDynamic(isDynamic: boolean | undefined);
    get isDynamic(): boolean | undefined;
}
//# sourceMappingURL=OpenAPISpecSpec.d.ts.map