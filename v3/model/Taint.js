"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaintEffectEnum = exports.Taint = void 0;
class Taint {
    constructor(key, effect) {
        this['key'] = key;
        this['effect'] = effect;
    }
    withKey(key) {
        this['key'] = key;
        return this;
    }
    withValue(value) {
        this['value'] = value;
        return this;
    }
    withEffect(effect) {
        this['effect'] = effect;
        return this;
    }
}
exports.Taint = Taint;
/**
    * @export
    * @enum {string}
    */
var TaintEffectEnum;
(function (TaintEffectEnum) {
    TaintEffectEnum["NOSCHEDULE"] = "NoSchedule";
    TaintEffectEnum["PREFERNOSCHEDULE"] = "PreferNoSchedule";
    TaintEffectEnum["NOEXECUTE"] = "NoExecute";
})(TaintEffectEnum = exports.TaintEffectEnum || (exports.TaintEffectEnum = {}));
//# sourceMappingURL=Taint.js.map