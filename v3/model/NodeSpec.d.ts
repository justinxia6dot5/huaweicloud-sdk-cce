import { HostnameConfig } from './HostnameConfig';
import { Login } from './Login';
import { NodeExtendParam } from './NodeExtendParam';
import { NodeNicSpec } from './NodeNicSpec';
import { NodePublicIP } from './NodePublicIP';
import { Runtime } from './Runtime';
import { Storage } from './Storage';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { Volume } from './Volume';
export declare class NodeSpec {
    flavor?: string;
    az?: string;
    os?: string;
    login?: Login;
    rootVolume?: Volume;
    dataVolumes?: Array<Volume>;
    storage?: Storage;
    publicIP?: NodePublicIP;
    nodeNicSpec?: NodeNicSpec;
    count?: number;
    billingMode?: number;
    taints?: Array<Taint>;
    k8sTags?: {
        [key: string]: string;
    };
    ecsGroupId?: string;
    dedicatedHostId?: string;
    userTags?: Array<UserTag>;
    runtime?: Runtime;
    initializedConditions?: Array<string>;
    extendParam?: NodeExtendParam;
    hostnameConfig?: HostnameConfig;
    constructor(flavor?: string, az?: string, login?: Login, rootVolume?: Volume, dataVolumes?: Array<Volume>);
    withFlavor(flavor: string): NodeSpec;
    withAz(az: string): NodeSpec;
    withOs(os: string): NodeSpec;
    withLogin(login: Login): NodeSpec;
    withRootVolume(rootVolume: Volume): NodeSpec;
    withDataVolumes(dataVolumes: Array<Volume>): NodeSpec;
    withStorage(storage: Storage): NodeSpec;
    withPublicIP(publicIP: NodePublicIP): NodeSpec;
    withNodeNicSpec(nodeNicSpec: NodeNicSpec): NodeSpec;
    withCount(count: number): NodeSpec;
    withBillingMode(billingMode: number): NodeSpec;
    withTaints(taints: Array<Taint>): NodeSpec;
    withK8sTags(k8sTags: {
        [key: string]: string;
    }): NodeSpec;
    withEcsGroupId(ecsGroupId: string): NodeSpec;
    withDedicatedHostId(dedicatedHostId: string): NodeSpec;
    withUserTags(userTags: Array<UserTag>): NodeSpec;
    withRuntime(runtime: Runtime): NodeSpec;
    withInitializedConditions(initializedConditions: Array<string>): NodeSpec;
    withExtendParam(extendParam: NodeExtendParam): NodeSpec;
    withHostnameConfig(hostnameConfig: HostnameConfig): NodeSpec;
}
//# sourceMappingURL=NodeSpec.d.ts.map