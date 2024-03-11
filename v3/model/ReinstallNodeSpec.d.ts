import { HostnameConfig } from './HostnameConfig';
import { Login } from './Login';
import { NodeLifecycleConfig } from './NodeLifecycleConfig';
import { ReinstallExtendParam } from './ReinstallExtendParam';
import { ReinstallK8sOptionsConfig } from './ReinstallK8sOptionsConfig';
import { ReinstallRuntimeConfig } from './ReinstallRuntimeConfig';
import { ReinstallServerConfig } from './ReinstallServerConfig';
import { ReinstallVolumeConfig } from './ReinstallVolumeConfig';
export declare class ReinstallNodeSpec {
    os?: string;
    login?: Login;
    name?: string;
    serverConfig?: ReinstallServerConfig;
    volumeConfig?: ReinstallVolumeConfig;
    runtimeConfig?: ReinstallRuntimeConfig;
    k8sOptions?: ReinstallK8sOptionsConfig;
    lifecycle?: NodeLifecycleConfig;
    initializedConditions?: Array<string>;
    extendParam?: ReinstallExtendParam;
    hostnameConfig?: HostnameConfig;
    constructor(os?: string, login?: Login);
    withOs(os: string): ReinstallNodeSpec;
    withLogin(login: Login): ReinstallNodeSpec;
    withName(name: string): ReinstallNodeSpec;
    withServerConfig(serverConfig: ReinstallServerConfig): ReinstallNodeSpec;
    withVolumeConfig(volumeConfig: ReinstallVolumeConfig): ReinstallNodeSpec;
    withRuntimeConfig(runtimeConfig: ReinstallRuntimeConfig): ReinstallNodeSpec;
    withK8sOptions(k8sOptions: ReinstallK8sOptionsConfig): ReinstallNodeSpec;
    withLifecycle(lifecycle: NodeLifecycleConfig): ReinstallNodeSpec;
    withInitializedConditions(initializedConditions: Array<string>): ReinstallNodeSpec;
    withExtendParam(extendParam: ReinstallExtendParam): ReinstallNodeSpec;
    withHostnameConfig(hostnameConfig: HostnameConfig): ReinstallNodeSpec;
}
//# sourceMappingURL=ReinstallNodeSpec.d.ts.map