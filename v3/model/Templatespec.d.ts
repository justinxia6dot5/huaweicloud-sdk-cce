import { Versions } from './Versions';
export declare class Templatespec {
    type?: string;
    require?: boolean;
    labels?: Array<string>;
    logoURL?: string;
    readmeURL?: string;
    description?: string;
    versions?: Array<Versions>;
    constructor(type?: string, labels?: Array<string>, logoURL?: string, readmeURL?: string, description?: string, versions?: Array<Versions>);
    withType(type: string): Templatespec;
    withRequire(require: boolean): Templatespec;
    withLabels(labels: Array<string>): Templatespec;
    withLogoURL(logoURL: string): Templatespec;
    withReadmeURL(readmeURL: string): Templatespec;
    withDescription(description: string): Templatespec;
    withVersions(versions: Array<Versions>): Templatespec;
}
//# sourceMappingURL=Templatespec.d.ts.map