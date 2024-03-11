export declare class Taint {
    key?: string;
    value?: string;
    effect?: TaintEffectEnum | string;
    constructor(key?: string, effect?: string);
    withKey(key: string): Taint;
    withValue(value: string): Taint;
    withEffect(effect: TaintEffectEnum | string): Taint;
}
/**
    * @export
    * @enum {string}
    */
export declare enum TaintEffectEnum {
    NOSCHEDULE = "NoSchedule",
    PREFERNOSCHEDULE = "PreferNoSchedule",
    NOEXECUTE = "NoExecute"
}
//# sourceMappingURL=Taint.d.ts.map