"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Templatespec = void 0;
class Templatespec {
    constructor(type, labels, logoURL, readmeURL, description, versions) {
        this['type'] = type;
        this['labels'] = labels;
        this['logoURL'] = logoURL;
        this['readmeURL'] = readmeURL;
        this['description'] = description;
        this['versions'] = versions;
    }
    withType(type) {
        this['type'] = type;
        return this;
    }
    withRequire(require) {
        this['require'] = require;
        return this;
    }
    withLabels(labels) {
        this['labels'] = labels;
        return this;
    }
    withLogoURL(logoURL) {
        this['logoURL'] = logoURL;
        return this;
    }
    withReadmeURL(readmeURL) {
        this['readmeURL'] = readmeURL;
        return this;
    }
    withDescription(description) {
        this['description'] = description;
        return this;
    }
    withVersions(versions) {
        this['versions'] = versions;
        return this;
    }
}
exports.Templatespec = Templatespec;
//# sourceMappingURL=Templatespec.js.map