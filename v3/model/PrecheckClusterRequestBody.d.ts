import { PrecheckSpec } from './PrecheckSpec';
export declare class PrecheckClusterRequestBody {
    apiVersion?: string;
    kind?: string;
    spec?: PrecheckSpec;
    constructor(apiVersion?: string, kind?: string, spec?: PrecheckSpec);
    withApiVersion(apiVersion: string): PrecheckClusterRequestBody;
    withKind(kind: string): PrecheckClusterRequestBody;
    withSpec(spec: PrecheckSpec): PrecheckClusterRequestBody;
}
//# sourceMappingURL=PrecheckClusterRequestBody.d.ts.map