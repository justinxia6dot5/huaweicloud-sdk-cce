export declare class ClusterExtendParam {
    clusterAZ?: string;
    dssMasterVolumes?: string;
    enterpriseProjectId?: string;
    kubeProxyMode?: string;
    clusterExternalIP?: string;
    private 'alpha.cce/fixPoolMask'?;
    decMasterFlavor?: string;
    dockerUmaskMode?: string;
    private 'kubernetes.io/cpuManagerPolicy'?;
    orderID?: string;
    periodType?: string;
    periodNum?: number;
    isAutoRenew?: string;
    isAutoPay?: string;
    upgradefrom?: string;
    constructor();
    withClusterAZ(clusterAZ: string): ClusterExtendParam;
    withDssMasterVolumes(dssMasterVolumes: string): ClusterExtendParam;
    withEnterpriseProjectId(enterpriseProjectId: string): ClusterExtendParam;
    withKubeProxyMode(kubeProxyMode: string): ClusterExtendParam;
    withClusterExternalIP(clusterExternalIP: string): ClusterExtendParam;
    withAlphaCceFixPoolMask(alphaCceFixPoolMask: string): ClusterExtendParam;
    set alphaCceFixPoolMask(alphaCceFixPoolMask: string | undefined);
    get alphaCceFixPoolMask(): string | undefined;
    withDecMasterFlavor(decMasterFlavor: string): ClusterExtendParam;
    withDockerUmaskMode(dockerUmaskMode: string): ClusterExtendParam;
    withKubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy: string): ClusterExtendParam;
    set kubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy: string | undefined);
    get kubernetesIoCpuManagerPolicy(): string | undefined;
    withOrderID(orderID: string): ClusterExtendParam;
    withPeriodType(periodType: string): ClusterExtendParam;
    withPeriodNum(periodNum: number): ClusterExtendParam;
    withIsAutoRenew(isAutoRenew: string): ClusterExtendParam;
    withIsAutoPay(isAutoPay: string): ClusterExtendParam;
    withUpgradefrom(upgradefrom: string): ClusterExtendParam;
}
//# sourceMappingURL=ClusterExtendParam.d.ts.map