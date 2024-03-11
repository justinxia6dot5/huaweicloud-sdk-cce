"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EipSpecBandwidthSharetypeEnum = exports.EipSpecBandwidth = void 0;
class EipSpecBandwidth {
    constructor() {
    }
    withSize(size) {
        this['size'] = size;
        return this;
    }
    withSharetype(sharetype) {
        this['sharetype'] = sharetype;
        return this;
    }
}
exports.EipSpecBandwidth = EipSpecBandwidth;
/**
    * @export
    * @enum {string}
    */
var EipSpecBandwidthSharetypeEnum;
(function (EipSpecBandwidthSharetypeEnum) {
    EipSpecBandwidthSharetypeEnum["PER"] = "PER";
    EipSpecBandwidthSharetypeEnum["WHOLE"] = "WHOLE";
})(EipSpecBandwidthSharetypeEnum = exports.EipSpecBandwidthSharetypeEnum || (exports.EipSpecBandwidthSharetypeEnum = {}));
//# sourceMappingURL=EipSpecBandwidth.js.map