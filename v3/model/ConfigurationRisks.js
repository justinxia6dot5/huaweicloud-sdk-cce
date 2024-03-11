"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRisks = void 0;
class ConfigurationRisks {
    constructor() {
    }
    withPackage(_package) {
        this['package'] = _package;
        return this;
    }
    set _package(_package) {
        this['package'] = _package;
    }
    get _package() {
        return this['package'];
    }
    withSourceFile(sourceFile) {
        this['sourceFile'] = sourceFile;
        return this;
    }
    withNodeMsg(nodeMsg) {
        this['nodeMsg'] = nodeMsg;
        return this;
    }
    withField(field) {
        this['field'] = field;
        return this;
    }
    withOperation(operation) {
        this['operation'] = operation;
        return this;
    }
    withOriginalValue(originalValue) {
        this['originalValue'] = originalValue;
        return this;
    }
    withValue(value) {
        this['value'] = value;
        return this;
    }
}
exports.ConfigurationRisks = ConfigurationRisks;
//# sourceMappingURL=ConfigurationRisks.js.map