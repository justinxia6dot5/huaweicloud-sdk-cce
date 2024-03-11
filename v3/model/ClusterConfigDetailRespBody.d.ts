import { PackageOptions } from "./PackageOptions";
export declare class ClusterConfigDetailRespBody {
  private "kube-apiserver"?;
  constructor();
  withKubeApiserver(
    kubeApiserver: Array<PackageOptions>
  ): ClusterConfigDetailRespBody;
  set kubeApiserver(kubeApiserver: Array<PackageOptions> | undefined);
  get kubeApiserver(): Array<PackageOptions> | undefined;
}
//# sourceMappingURL=ClusterConfigDetailRespBody.d.ts.map
