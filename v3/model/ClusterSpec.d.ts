import { Authentication } from './Authentication';
import { ClusterExtendParam } from './ClusterExtendParam';
import { ContainerNetwork } from './ContainerNetwork';
import { EniNetwork } from './EniNetwork';
import { HostNetwork } from './HostNetwork';
import { MasterSpec } from './MasterSpec';
import { PackageConfiguration } from './PackageConfiguration';
import { ResourceTag } from './ResourceTag';
import { ServiceNetwork } from './ServiceNetwork';
export declare class ClusterSpec {
    category?: ClusterSpecCategoryEnum | string;
    type?: ClusterSpecTypeEnum | string;
    flavor?: string;
    enableAutopilot?: boolean;
    version?: string;
    platformVersion?: string;
    description?: string;
    customSan?: Array<string>;
    ipv6enable?: boolean;
    hostNetwork?: HostNetwork;
    containerNetwork?: ContainerNetwork;
    eniNetwork?: EniNetwork;
    serviceNetwork?: ServiceNetwork;
    authentication?: Authentication;
    billingMode?: number;
    masters?: Array<MasterSpec>;
    kubernetesSvcIpRange?: string;
    clusterTags?: Array<ResourceTag>;
    kubeProxyMode?: ClusterSpecKubeProxyModeEnum | string;
    az?: string;
    extendParam?: ClusterExtendParam;
    supportIstio?: boolean;
    enableMasterVolumeEncryption?: boolean;
    configurationsOverride?: Array<PackageConfiguration>;
    constructor(flavor?: string, hostNetwork?: HostNetwork, containerNetwork?: ContainerNetwork);
    withCategory(category: ClusterSpecCategoryEnum | string): ClusterSpec;
    withType(type: ClusterSpecTypeEnum | string): ClusterSpec;
    withFlavor(flavor: string): ClusterSpec;
    withEnableAutopilot(enableAutopilot: boolean): ClusterSpec;
    withVersion(version: string): ClusterSpec;
    withPlatformVersion(platformVersion: string): ClusterSpec;
    withDescription(description: string): ClusterSpec;
    withCustomSan(customSan: Array<string>): ClusterSpec;
    withIpv6enable(ipv6enable: boolean): ClusterSpec;
    withHostNetwork(hostNetwork: HostNetwork): ClusterSpec;
    withContainerNetwork(containerNetwork: ContainerNetwork): ClusterSpec;
    withEniNetwork(eniNetwork: EniNetwork): ClusterSpec;
    withServiceNetwork(serviceNetwork: ServiceNetwork): ClusterSpec;
    withAuthentication(authentication: Authentication): ClusterSpec;
    withBillingMode(billingMode: number): ClusterSpec;
    withMasters(masters: Array<MasterSpec>): ClusterSpec;
    withKubernetesSvcIpRange(kubernetesSvcIpRange: string): ClusterSpec;
    withClusterTags(clusterTags: Array<ResourceTag>): ClusterSpec;
    withKubeProxyMode(kubeProxyMode: ClusterSpecKubeProxyModeEnum | string): ClusterSpec;
    withAz(az: string): ClusterSpec;
    withExtendParam(extendParam: ClusterExtendParam): ClusterSpec;
    withSupportIstio(supportIstio: boolean): ClusterSpec;
    withEnableMasterVolumeEncryption(enableMasterVolumeEncryption: boolean): ClusterSpec;
    withConfigurationsOverride(configurationsOverride: Array<PackageConfiguration>): ClusterSpec;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ClusterSpecCategoryEnum {
    CCE = "CCE",
    TURBO = "Turbo"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ClusterSpecTypeEnum {
    VIRTUALMACHINE = "VirtualMachine",
    ARM64 = "ARM64"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ClusterSpecKubeProxyModeEnum {
    IPTABLES = "iptables",
    IPVS = "ipvs"
}
//# sourceMappingURL=ClusterSpec.d.ts.map