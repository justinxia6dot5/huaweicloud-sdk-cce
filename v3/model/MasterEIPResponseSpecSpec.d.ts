import { EipSpec } from './EipSpec';
export declare class MasterEIPResponseSpecSpec {
    id?: string;
    eip?: EipSpec;
    private 'IsDynamic'?;
    constructor();
    withId(id: string): MasterEIPResponseSpecSpec;
    withEip(eip: EipSpec): MasterEIPResponseSpecSpec;
    withIsDynamic(isDynamic: boolean): MasterEIPResponseSpecSpec;
    set isDynamic(isDynamic: boolean | undefined);
    get isDynamic(): boolean | undefined;
}
//# sourceMappingURL=MasterEIPResponseSpecSpec.d.ts.map