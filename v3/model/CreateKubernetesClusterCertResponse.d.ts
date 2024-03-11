import { Clusters } from './Clusters';
import { Contexts } from './Contexts';
import { Users } from './Users';
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
export declare class CreateKubernetesClusterCertResponse extends SdkResponse {
    kind?: string;
    apiVersion?: string;
    preferences?: object;
    clusters?: Array<Clusters>;
    users?: Array<Users>;
    contexts?: Array<Contexts>;
    private 'current-context'?;
    private 'Port-ID'?;
    constructor();
    withKind(kind: string): CreateKubernetesClusterCertResponse;
    withApiVersion(apiVersion: string): CreateKubernetesClusterCertResponse;
    withPreferences(preferences: object): CreateKubernetesClusterCertResponse;
    withClusters(clusters: Array<Clusters>): CreateKubernetesClusterCertResponse;
    withUsers(users: Array<Users>): CreateKubernetesClusterCertResponse;
    withContexts(contexts: Array<Contexts>): CreateKubernetesClusterCertResponse;
    withCurrentContext(currentContext: string): CreateKubernetesClusterCertResponse;
    set currentContext(currentContext: string | undefined);
    get currentContext(): string | undefined;
    withPortID(portID: string): CreateKubernetesClusterCertResponse;
    set portID(portID: string | undefined);
    get portID(): string | undefined;
}
//# sourceMappingURL=CreateKubernetesClusterCertResponse.d.ts.map