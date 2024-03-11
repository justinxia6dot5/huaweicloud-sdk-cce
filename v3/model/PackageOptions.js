"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageOptionsValidAtEnum = exports.PackageOptions = void 0;
class PackageOptions {
    constructor(name, _default, validAt, empty, schema, type) {
        this['name'] = name;
        this['default'] = _default;
        this['validAt'] = validAt;
        this['empty'] = empty;
        this['schema'] = schema;
        this['type'] = type;
    }
    withName(name) {
        this['name'] = name;
        return this;
    }
    withDefault(_default) {
        this['default'] = _default;
        return this;
    }
    set _default(_default) {
        this['default'] = _default;
    }
    get _default() {
        return this['default'];
    }
    withValidAt(validAt) {
        this['validAt'] = validAt;
        return this;
    }
    withEmpty(empty) {
        this['empty'] = empty;
        return this;
    }
    withSchema(schema) {
        this['schema'] = schema;
        return this;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
}
exports.PackageOptions = PackageOptions;
/**
    * @export
    * @enum {string}
    */
var PackageOptionsValidAtEnum;
(function (PackageOptionsValidAtEnum) {
    PackageOptionsValidAtEnum["STATIC"] = "static";
    PackageOptionsValidAtEnum["IMMEDIATELY"] = "immediately";
})(PackageOptionsValidAtEnum = exports.PackageOptionsValidAtEnum || (exports.PackageOptionsValidAtEnum = {}));
//# sourceMappingURL=PackageOptions.js.map