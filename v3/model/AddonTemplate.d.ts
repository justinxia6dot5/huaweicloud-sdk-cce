import { AddonMetadata } from './AddonMetadata';
import { Templatespec } from './Templatespec';
export declare class AddonTemplate {
    kind?: string;
    apiVersion?: string;
    metadata?: AddonMetadata;
    spec?: Templatespec;
    constructor(kind?: string, apiVersion?: string, metadata?: AddonMetadata, spec?: Templatespec);
    withKind(kind: string): AddonTemplate;
    withApiVersion(apiVersion: string): AddonTemplate;
    withMetadata(metadata: AddonMetadata): AddonTemplate;
    withSpec(spec: Templatespec): AddonTemplate;
}
//# sourceMappingURL=AddonTemplate.d.ts.map