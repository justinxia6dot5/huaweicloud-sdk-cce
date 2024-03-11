import { PostcheckSpec } from './PostcheckSpec';
export declare class PostcheckClusterRequestBody {
    apiVersion?: string;
    kind?: string;
    spec?: PostcheckSpec;
    constructor(apiVersion?: string, kind?: string, spec?: PostcheckSpec);
    withApiVersion(apiVersion: string): PostcheckClusterRequestBody;
    withKind(kind: string): PostcheckClusterRequestBody;
    withSpec(spec: PostcheckSpec): PostcheckClusterRequestBody;
}
//# sourceMappingURL=PostcheckClusterRequestBody.d.ts.map