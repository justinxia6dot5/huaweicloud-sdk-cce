import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { AddNodeRequest } from './model/AddNodeRequest';
import { AddNodeResponse } from './model/AddNodeResponse';
import { AwakeClusterRequest } from './model/AwakeClusterRequest';
import { AwakeClusterResponse } from './model/AwakeClusterResponse';
import { BatchCreateClusterTagsRequest } from './model/BatchCreateClusterTagsRequest';
import { BatchCreateClusterTagsResponse } from './model/BatchCreateClusterTagsResponse';
import { BatchDeleteClusterTagsRequest } from './model/BatchDeleteClusterTagsRequest';
import { BatchDeleteClusterTagsResponse } from './model/BatchDeleteClusterTagsResponse';
import { ContinueUpgradeClusterTaskRequest } from './model/ContinueUpgradeClusterTaskRequest';
import { ContinueUpgradeClusterTaskResponse } from './model/ContinueUpgradeClusterTaskResponse';
import { CreateAddonInstanceRequest } from './model/CreateAddonInstanceRequest';
import { CreateAddonInstanceResponse } from './model/CreateAddonInstanceResponse';
import { CreateCloudPersistentVolumeClaimsRequest } from './model/CreateCloudPersistentVolumeClaimsRequest';
import { CreateCloudPersistentVolumeClaimsResponse } from './model/CreateCloudPersistentVolumeClaimsResponse';
import { CreateClusterMasterSnapshotRequest } from './model/CreateClusterMasterSnapshotRequest';
import { CreateClusterMasterSnapshotResponse } from './model/CreateClusterMasterSnapshotResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateKubernetesClusterCertRequest } from './model/CreateKubernetesClusterCertRequest';
import { CreateKubernetesClusterCertResponse } from './model/CreateKubernetesClusterCertResponse';
import { CreateNodePoolRequest } from './model/CreateNodePoolRequest';
import { CreateNodePoolResponse } from './model/CreateNodePoolResponse';
import { CreateNodeRequest } from './model/CreateNodeRequest';
import { CreateNodeResponse } from './model/CreateNodeResponse';
import { CreatePartitionRequest } from './model/CreatePartitionRequest';
import { CreatePartitionResponse } from './model/CreatePartitionResponse';
import { CreatePostCheckRequest } from './model/CreatePostCheckRequest';
import { CreatePostCheckResponse } from './model/CreatePostCheckResponse';
import { CreatePreCheckRequest } from './model/CreatePreCheckRequest';
import { CreatePreCheckResponse } from './model/CreatePreCheckResponse';
import { CreateReleaseRequest } from './model/CreateReleaseRequest';
import { CreateReleaseResponse } from './model/CreateReleaseResponse';
import { CreateUpgradeWorkFlowRequest } from './model/CreateUpgradeWorkFlowRequest';
import { CreateUpgradeWorkFlowResponse } from './model/CreateUpgradeWorkFlowResponse';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteChartRequest } from './model/DeleteChartRequest';
import { DeleteChartResponse } from './model/DeleteChartResponse';
import { DeleteCloudPersistentVolumeClaimsRequest } from './model/DeleteCloudPersistentVolumeClaimsRequest';
import { DeleteCloudPersistentVolumeClaimsResponse } from './model/DeleteCloudPersistentVolumeClaimsResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteNodePoolRequest } from './model/DeleteNodePoolRequest';
import { DeleteNodePoolResponse } from './model/DeleteNodePoolResponse';
import { DeleteNodeRequest } from './model/DeleteNodeRequest';
import { DeleteNodeResponse } from './model/DeleteNodeResponse';
import { DeleteReleaseRequest } from './model/DeleteReleaseRequest';
import { DeleteReleaseResponse } from './model/DeleteReleaseResponse';
import { DownloadChartRequest } from './model/DownloadChartRequest';
import { DownloadChartResponse } from './model/DownloadChartResponse';
import { HibernateClusterRequest } from './model/HibernateClusterRequest';
import { HibernateClusterResponse } from './model/HibernateClusterResponse';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListChartsRequest } from './model/ListChartsRequest';
import { ListChartsResponse } from './model/ListChartsResponse';
import { ListClusterMasterSnapshotTasksRequest } from './model/ListClusterMasterSnapshotTasksRequest';
import { ListClusterMasterSnapshotTasksResponse } from './model/ListClusterMasterSnapshotTasksResponse';
import { ListClusterUpgradeFeatureGatesRequest } from './model/ListClusterUpgradeFeatureGatesRequest';
import { ListClusterUpgradeFeatureGatesResponse } from './model/ListClusterUpgradeFeatureGatesResponse';
import { ListClusterUpgradePathsRequest } from './model/ListClusterUpgradePathsRequest';
import { ListClusterUpgradePathsResponse } from './model/ListClusterUpgradePathsResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListNodePoolsRequest } from './model/ListNodePoolsRequest';
import { ListNodePoolsResponse } from './model/ListNodePoolsResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { ListPartitionsRequest } from './model/ListPartitionsRequest';
import { ListPartitionsResponse } from './model/ListPartitionsResponse';
import { ListPreCheckTasksRequest } from './model/ListPreCheckTasksRequest';
import { ListPreCheckTasksResponse } from './model/ListPreCheckTasksResponse';
import { ListReleasesRequest } from './model/ListReleasesRequest';
import { ListReleasesResponse } from './model/ListReleasesResponse';
import { ListUpgradeClusterTasksRequest } from './model/ListUpgradeClusterTasksRequest';
import { ListUpgradeClusterTasksResponse } from './model/ListUpgradeClusterTasksResponse';
import { ListUpgradeWorkFlowsRequest } from './model/ListUpgradeWorkFlowsRequest';
import { ListUpgradeWorkFlowsResponse } from './model/ListUpgradeWorkFlowsResponse';
import { MigrateNodeRequest } from './model/MigrateNodeRequest';
import { MigrateNodeResponse } from './model/MigrateNodeResponse';
import { PauseUpgradeClusterTaskRequest } from './model/PauseUpgradeClusterTaskRequest';
import { PauseUpgradeClusterTaskResponse } from './model/PauseUpgradeClusterTaskResponse';
import { RemoveNodeRequest } from './model/RemoveNodeRequest';
import { RemoveNodeResponse } from './model/RemoveNodeResponse';
import { ResetNodeRequest } from './model/ResetNodeRequest';
import { ResetNodeResponse } from './model/ResetNodeResponse';
import { ResizeClusterRequest } from './model/ResizeClusterRequest';
import { ResizeClusterResponse } from './model/ResizeClusterResponse';
import { RetryUpgradeClusterTaskRequest } from './model/RetryUpgradeClusterTaskRequest';
import { RetryUpgradeClusterTaskResponse } from './model/RetryUpgradeClusterTaskResponse';
import { RollbackAddonInstanceRequest } from './model/RollbackAddonInstanceRequest';
import { RollbackAddonInstanceResponse } from './model/RollbackAddonInstanceResponse';
import { ShowAddonInstanceRequest } from './model/ShowAddonInstanceRequest';
import { ShowAddonInstanceResponse } from './model/ShowAddonInstanceResponse';
import { ShowChartRequest } from './model/ShowChartRequest';
import { ShowChartResponse } from './model/ShowChartResponse';
import { ShowChartValuesRequest } from './model/ShowChartValuesRequest';
import { ShowChartValuesResponse } from './model/ShowChartValuesResponse';
import { ShowClusterConfigRequest } from './model/ShowClusterConfigRequest';
import { ShowClusterConfigResponse } from './model/ShowClusterConfigResponse';
import { ShowClusterConfigurationDetailsRequest } from './model/ShowClusterConfigurationDetailsRequest';
import { ShowClusterConfigurationDetailsResponse } from './model/ShowClusterConfigurationDetailsResponse';
import { ShowClusterEndpointsRequest } from './model/ShowClusterEndpointsRequest';
import { ShowClusterEndpointsResponse } from './model/ShowClusterEndpointsResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowClusterUpgradeInfoRequest } from './model/ShowClusterUpgradeInfoRequest';
import { ShowClusterUpgradeInfoResponse } from './model/ShowClusterUpgradeInfoResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowNodePoolConfigurationsRequest } from './model/ShowNodePoolConfigurationsRequest';
import { ShowNodePoolConfigurationsResponse } from './model/ShowNodePoolConfigurationsResponse';
import { ShowNodePoolRequest } from './model/ShowNodePoolRequest';
import { ShowNodePoolResponse } from './model/ShowNodePoolResponse';
import { ShowNodeRequest } from './model/ShowNodeRequest';
import { ShowNodeResponse } from './model/ShowNodeResponse';
import { ShowPartitionRequest } from './model/ShowPartitionRequest';
import { ShowPartitionResponse } from './model/ShowPartitionResponse';
import { ShowPreCheckRequest } from './model/ShowPreCheckRequest';
import { ShowPreCheckResponse } from './model/ShowPreCheckResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowReleaseHistoryRequest } from './model/ShowReleaseHistoryRequest';
import { ShowReleaseHistoryResponse } from './model/ShowReleaseHistoryResponse';
import { ShowReleaseRequest } from './model/ShowReleaseRequest';
import { ShowReleaseResponse } from './model/ShowReleaseResponse';
import { ShowUpgradeClusterTaskRequest } from './model/ShowUpgradeClusterTaskRequest';
import { ShowUpgradeClusterTaskResponse } from './model/ShowUpgradeClusterTaskResponse';
import { ShowUpgradeWorkFlowRequest } from './model/ShowUpgradeWorkFlowRequest';
import { ShowUpgradeWorkFlowResponse } from './model/ShowUpgradeWorkFlowResponse';
import { ShowUserChartsQuotasRequest } from './model/ShowUserChartsQuotasRequest';
import { ShowUserChartsQuotasResponse } from './model/ShowUserChartsQuotasResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateChartRequest } from './model/UpdateChartRequest';
import { UpdateChartResponse } from './model/UpdateChartResponse';
import { UpdateClusterEipRequest } from './model/UpdateClusterEipRequest';
import { UpdateClusterEipResponse } from './model/UpdateClusterEipResponse';
import { UpdateClusterLogConfigRequest } from './model/UpdateClusterLogConfigRequest';
import { UpdateClusterLogConfigResponse } from './model/UpdateClusterLogConfigResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateNodePoolConfigurationRequest } from './model/UpdateNodePoolConfigurationRequest';
import { UpdateNodePoolConfigurationResponse } from './model/UpdateNodePoolConfigurationResponse';
import { UpdateNodePoolRequest } from './model/UpdateNodePoolRequest';
import { UpdateNodePoolResponse } from './model/UpdateNodePoolResponse';
import { UpdateNodeRequest } from './model/UpdateNodeRequest';
import { UpdateNodeResponse } from './model/UpdateNodeResponse';
import { UpdatePartitionRequest } from './model/UpdatePartitionRequest';
import { UpdatePartitionResponse } from './model/UpdatePartitionResponse';
import { UpdateReleaseRequest } from './model/UpdateReleaseRequest';
import { UpdateReleaseResponse } from './model/UpdateReleaseResponse';
import { UpgradeClusterRequest } from './model/UpgradeClusterRequest';
import { UpgradeClusterResponse } from './model/UpgradeClusterResponse';
import { UpgradeWorkFlowUpdateRequest } from './model/UpgradeWorkFlowUpdateRequest';
import { UpgradeWorkFlowUpdateResponse } from './model/UpgradeWorkFlowUpdateResponse';
import { UploadChartRequest } from './model/UploadChartRequest';
import { UploadChartResponse } from './model/UploadChartResponse';
export declare class CceClient {
    static newBuilder(): ClientBuilder<CceClient>;
    private hcClient;
    constructor(client: HcClient);
    getPath(): string;
    /**
     * 该API用于在指定集群下纳管节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 纳管节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {AddNodeList} addNodeList 纳管节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addNode(addNodeRequest?: AddNodeRequest): Promise<AddNodeResponse>;
    /**
     * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群唤醒
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    awakeCluster(awakeClusterRequest?: AwakeClusterRequest): Promise<AwakeClusterResponse>;
    /**
     * 该API用于批量添加指定集群的资源标签。
     * &gt; - 每个集群支持最多20个资源标签。
     * &gt; - 此接口为幂等接口：创建时，如果创建的标签已经存在（key/value均相同视为重复），默认处理成功；key相同，value不同时会覆盖原有标签。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加指定集群的资源标签
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {BatchCreateClusterTagsRequestBody} batchCreateClusterTagsRequestBody 批量添加指定集群资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest): Promise<BatchCreateClusterTagsResponse>;
    /**
     * 该API用于批量删除指定集群的资源标签。
     * &gt; - 此接口为幂等接口：删除时，如果删除的标签key不存在，默认处理成功。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定集群的资源标签
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {BatchDeleteClusterTagsRequestBody} batchDeleteClusterTagsRequestBody 批量删除指定集群资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest): Promise<BatchDeleteClusterTagsResponse>;
    /**
     * 继续执行被暂停的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续执行集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    continueUpgradeClusterTask(continueUpgradeClusterTaskRequest?: ContinueUpgradeClusterTaskRequest): Promise<ContinueUpgradeClusterTaskResponse>;
    /**
     * 根据提供的插件模板，安装插件实例。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} createAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest): Promise<CreateAddonInstanceResponse>;
    /**
     * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。该API待废弃，请使用Kubernetes PVC相关接口。
     *
     *
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建PVC（待废弃）
     * @param {string} namespace 指定PersistentVolumeClaim所在的命名空间。  使用namespace有如下约束：  - 用户自定义的namespace，使用前必须先在集群中创建namespace  - 系统自带的namespace：default  - 不能使用kube-system与kube-public
     * @param {string} contentType 消息体的类型（格式）
     * @param {PersistentVolumeClaim} createCloudPersistentVolumeClaimsRequestBody 请求body参数说明；非单个参数名称
     * @param {string} [xClusterID] 集群ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest): Promise<CreateCloudPersistentVolumeClaimsResponse>;
    /**
     * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](cce_02_0242.xml)添加节点。
     *
     *
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {Cluster} createClusterRequestBody 集群规格信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 集群备份
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群备份
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createClusterMasterSnapshot(createClusterMasterSnapshotRequest?: CreateClusterMasterSnapshotRequest): Promise<CreateClusterMasterSnapshotResponse>;
    /**
     * 该API用于获取指定集群的证书信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群证书
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CertDuration} createKubernetesClusterCertRequestBody 创建集群证书的请求Body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest): Promise<CreateKubernetesClusterCertResponse>;
    /**
     * 该API用于在指定集群下创建节点。
     * &gt; - 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodeCreateRequest} createNodeRequestBody 创建节点的请求体
     * @param {'NodepoolScaleUp'} [nodepoolScaleUp] 标明是否为nodepool下发的请求。若不为“NodepoolScaleUp”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNode(createNodeRequest?: CreateNodeRequest): Promise<CreateNodeResponse>;
    /**
     * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     *
     * 1.21版本的集群创建节点池时支持绑定安全组，每个节点池最多绑定五个安全组。
     *
     * 更新节点池的安全组后，只针对新创的pod生效，建议驱逐节点上原有的pod。
     *
     * &gt; 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodePool} createNodePoolRequestBody 创建节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createNodePool(createNodePoolRequest?: CreateNodePoolRequest): Promise<CreateNodePoolResponse>;
    /**
     * 创建分区
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分区
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PartitionReqBody} createPartitionRequestBody 请求body参数说明；非单个参数名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPartition(createPartitionRequest?: CreatePartitionRequest): Promise<CreatePartitionResponse>;
    /**
     * 集群升级后确认，该接口建议配合Console使用，主要用于升级步骤完成后，客户确认集群状态和业务正常后做反馈。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级后确认
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PostcheckClusterRequestBody} postcheckClusterRequestBody 集群升级后确认请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPostCheck(createPostCheckRequest?: CreatePostCheckRequest): Promise<CreatePostCheckResponse>;
    /**
     * 集群升级前检查
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级前检查
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PrecheckClusterRequestBody} precheckClusterRequestBody 集群升级前检查请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createPreCheck(createPreCheckRequest?: CreatePreCheckRequest): Promise<CreatePreCheckResponse>;
    /**
     * 创建模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板实例
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {CreateReleaseReqBody} createReleaseRequestBody 创建release请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRelease(createReleaseRequest?: CreateReleaseRequest): Promise<CreateReleaseResponse>;
    /**
     * 该API用于创建一个集群升级流程引导任务。请在调用本接口完成引导任务创建之后，通过集群升级前检查开始检查任务。
     * 升级流程任务用于控制集群升级任务的执行流程，执行流程为 升级前检查 &#x3D;&gt; 集群升级 &#x3D;&gt; 升级后检查。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启集群升级流程引导任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateUpgradeWorkFlowRequestBody} createUpgradeWorkFlowRequestBody 集群升级流程引导任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUpgradeWorkFlow(createUpgradeWorkFlowRequest?: CreateUpgradeWorkFlowRequest): Promise<CreateUpgradeWorkFlowResponse>;
    /**
     * 删除插件实例的功能。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} [clusterId] 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest): Promise<DeleteAddonInstanceResponse>;
    /**
     * 删除模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChart(deleteChartRequest?: DeleteChartRequest): Promise<DeleteChartResponse>;
    /**
     * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。该API待废弃，请使用Kubernetes PVC相关接口。
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除PVC（待废弃）
     * @param {string} name 需要删除的PersistentVolumClaim的名称。
     * @param {string} namespace 指定PersistentVolumeClaim所在的命名空间。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [deleteVolume] 删除PersistentVolumeClaim后是否保留后端关联的云存储。false表示不删除，true表示删除，默认为false。
     * @param {string} [storageType] 云存储的类型，和deleteVolume搭配使用。即deleteVolume和storageType必须同时配置。 - bs：EVS云硬盘存储 - nfs：SFS弹性文件存储 - obs：OBS对象存储 - efs：SFS Turbo极速文件存储
     * @param {string} [xClusterID] 集群ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest): Promise<DeleteCloudPersistentVolumeClaimsResponse>;
    /**
     * 该API用于删除一个指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEfs] 是否删除SFS Turbo（极速文件存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEni] 是否删除eni ports（原生弹性网卡）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程，默认选项) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEvs] 是否删除evs（云硬盘）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteNet] 是否删除elb（弹性负载均衡）等集群Service/Ingress相关资源。 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程，默认选项) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteObs] 是否删除obs（对象存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs] 是否删除sfs（文件存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs30] 是否删除sfs3.0（文件存储卷3.0）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true'} [tobedeleted] 是否使用包周期集群删除参数预置模式（仅对包周期集群生效）。  需要和其他删除选项参数一起使用，未指定的参数，则使用默认值。  使用该参数，集群不执行真正的删除，仅将本次请求的全部query参数都预置到集群数据库中，用于包周期集群退订时识别用户要删除的资源。  允许重复执行，覆盖预置的删除参数。  枚举取值： - true  (预置模式，仅预置query参数，不执行删除)
     * @param {'delete' | 'reset' | 'retain'} [ondemandNodePolicy] 集群下所有按需节点处理策略， 枚举取值： - delete (删除服务器) - reset (保留服务器并重置服务器，数据不保留) - retain （保留服务器不重置服务器，数据保留）
     * @param {'reset' | 'retain'} [periodicNodePolicy] 集群下所有包周期节点处理策略， 枚举取值： - reset (保留服务器并重置服务器，数据不保留) - retain （保留服务器不重置服务器，数据保留）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 该API用于删除指定的节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'NoScaleDown'} [nodepoolScaleDown] 标明是否为nodepool下发的请求。若不为“NoScaleDown”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNode(deleteNodeRequest?: DeleteNodeRequest): Promise<DeleteNodeResponse>;
    /**
     * 该API用于删除指定的节点池。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest): Promise<DeleteNodePoolResponse>;
    /**
     * 删除指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRelease(deleteReleaseRequest?: DeleteReleaseRequest): Promise<DeleteReleaseResponse>;
    /**
     * 下载模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadChart(downloadChartRequest?: DownloadChartRequest): Promise<DownloadChartResponse>;
    /**
     * 集群休眠用于将运行中的集群置于休眠状态，休眠后，将不再收取控制节点资源费用。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群休眠
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest): Promise<HibernateClusterResponse>;
    /**
     * 获取集群所有已安装插件实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取AddonInstance列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest): Promise<ListAddonInstancesResponse>;
    /**
     * 插件模板查询接口，查询插件信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询AddonTemplates列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [addonTemplateName] 指定的插件名称或插件别名，不填写则查询列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse>;
    /**
     * 获取模板列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCharts(listChartsRequest?: ListChartsRequest): Promise<ListChartsResponse>;
    /**
     * 获取集群备份任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群备份任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listClusterMasterSnapshotTasks(listClusterMasterSnapshotTasksRequest?: ListClusterMasterSnapshotTasksRequest): Promise<ListClusterMasterSnapshotTasksResponse>;
    /**
     * 获取集群升级特性开关配置
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级特性开关配置
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listClusterUpgradeFeatureGates(listClusterUpgradeFeatureGatesRequest?: ListClusterUpgradeFeatureGatesRequest): Promise<ListClusterUpgradeFeatureGatesResponse>;
    /**
     * 获取集群升级路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级路径
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listClusterUpgradePaths(listClusterUpgradePathsRequest?: ListClusterUpgradePathsRequest): Promise<ListClusterUpgradePathsResponse>;
    /**
     * 该API用于获取指定项目下所有集群的详细信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目下的集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [detail] 查询集群详细信息。  若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)、已安装插件列表(installedAddonInstances)，已安装插件列表中包含名称(addonTemplateName)、版本号(version)、插件的状态信息(status)，放入到annotation中。
     * @param {'Available' | 'Unavailable' | 'ScalingUp' | 'ScalingDown' | 'Creating' | 'Deleting' | 'Upgrading' | 'Resizing' | 'RollingBack' | 'RollbackFailed' | 'Hibernating' | 'Hibernation' | 'Awaking' | 'Empty'} [status] 集群状态，取值如下 - Available：可用，表示集群处于正常状态。 - Unavailable：不可用，表示集群异常，需手动删除。 - ScalingUp：扩容中，表示集群正处于扩容过程中。 - ScalingDown：缩容中，表示集群正处于缩容过程中。 - Creating：创建中，表示集群正处于创建过程中。 - Deleting：删除中，表示集群正处于删除过程中。 - Upgrading：升级中，表示集群正处于升级过程中。 - Resizing：规格变更中，表示集群正处于变更规格中。 - RollingBack：回滚中，表示集群正处于回滚过程中。 - RollbackFailed：回滚异常，表示集群回滚异常。 - Hibernating：休眠中，表示集群正处于休眠过程中。 - Hibernation：已休眠，表示集群正处于休眠状态。 - Awaking：唤醒中，表示集群正处于从休眠状态唤醒的过程中。 - Empty：集群无任何资源（已废弃）
     * @param {'VirtualMachine' | 'ARM64'} [type] 集群类型： - VirtualMachine：CCE集群 - ARM64：鲲鹏集群
     * @param {string} [version] 集群版本过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 该API用于获取集群下所有节点池。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - nodepool是集群中具有相同配置的节点实例的子集。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群下所有节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [showDefaultNodePool] 是否展示默认节点池。默认不展示，指定为“true”时展示默认节点池。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNodePools(listNodePoolsRequest?: ListNodePoolsRequest): Promise<ListNodePoolsResponse>;
    /**
     * 该API用于通过集群ID获取指定集群下所有节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群下所有节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse>;
    /**
     * 获取分区列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分区列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPartitions(listPartitionsRequest?: ListPartitionsRequest): Promise<ListPartitionsResponse>;
    /**
     * 获取集群升级前检查任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级前检查任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPreCheckTasks(listPreCheckTasksRequest?: ListPreCheckTasksRequest): Promise<ListPreCheckTasksResponse>;
    /**
     * 获取模板实例列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板实例列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} [chartId] 模板ID
     * @param {string} [namespace] 模板对应的命名空间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReleases(listReleasesRequest?: ListReleasesRequest): Promise<ListReleasesResponse>;
    /**
     * 获取集群升级任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpgradeClusterTasks(listUpgradeClusterTasksRequest?: ListUpgradeClusterTasksRequest): Promise<ListUpgradeClusterTasksResponse>;
    /**
     * 获取历史集群升级引导任务列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取UpgradeWorkFlows列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpgradeWorkFlows(listUpgradeWorkFlowsRequest?: ListUpgradeWorkFlowsRequest): Promise<ListUpgradeWorkFlowsResponse>;
    /**
     * 该API用于在指定集群下迁移节点到另一集群。
     *
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点迁移
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} targetClusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MigrateNodesTask} migrateNodesTask 迁移节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateNode(migrateNodeRequest?: MigrateNodeRequest): Promise<MigrateNodeResponse>;
    /**
     * 暂停集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest?: PauseUpgradeClusterTaskRequest): Promise<PauseUpgradeClusterTaskResponse>;
    /**
     * 该API用于在指定集群下移除节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点移除
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {RemoveNodesTask} removeNodesTask 移除节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeNode(removeNodeRequest?: RemoveNodeRequest): Promise<RemoveNodeResponse>;
    /**
     * 该API用于在指定集群下重置节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ResetNodeList} resetNodeList 重置节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetNode(resetNodeRequest?: ResetNodeRequest): Promise<ResetNodeResponse>;
    /**
     * 该API用于变更一个指定集群的规格。
     *
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/usermanual-cce/cce_10_0403.html)。](tag:hws)
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/intl/zh-cn/usermanual-cce/cce_10_0403.html)](tag:hws_hk)
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更集群规格
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ResizeClusterRequestBody} resizeClusterRequestBody 变更集群规格的结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resizeCluster(resizeClusterRequest?: ResizeClusterRequest): Promise<ResizeClusterResponse>;
    /**
     * 重新执行失败的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retryUpgradeClusterTask(retryUpgradeClusterTaskRequest?: RetryUpgradeClusterTaskRequest): Promise<RetryUpgradeClusterTaskResponse>;
    /**
     * 将插件实例回滚到升级前的版本。只有在当前插件实例版本支持回滚到升级前的版本（status.isRollbackable为true），且插件实例状态为running（运行中）、available（可用）、abnormal（不可用）、upgradeFailed（升级失败）、rollbackFailed（回滚失败）时支持回滚。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回滚AddonInstance
     * @param {string} id 插件实例ID
     * @param {AddonInstanceRollbackRequest} addonInstanceRollbackRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rollbackAddonInstance(rollbackAddonInstanceRequest?: RollbackAddonInstanceRequest): Promise<RollbackAddonInstanceResponse>;
    /**
     * 获取插件实例详情。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取AddonInstance详情
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} [clusterId] 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest): Promise<ShowAddonInstanceResponse>;
    /**
     * 获取模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showChart(showChartRequest?: ShowChartRequest): Promise<ShowChartResponse>;
    /**
     * 获取模板Values
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板Values
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showChartValues(showChartValuesRequest?: ShowChartValuesRequest): Promise<ShowChartValuesResponse>;
    /**
     * 该API用于获取指定集群的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [detail] 查询集群详细信息。  若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)和已安装插件列表(installedAddonInstances)，已安装插件列表中包含名称(addonTemplateName)、版本号(version)、插件的状态信息(status)，放入到annotation中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showCluster(showClusterRequest?: ShowClusterRequest): Promise<ShowClusterResponse>;
    /**
     * 获取集群组件上报的LTS的配置信息
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群日志配置信息
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'control' | 'audit' | 'system-addon'} [type] 组件类型 , 合法取值为control，audit，system-addon。不填写则查询全部类型。 - control 控制面组件日志。 - audit 控制面审计日志。 - system-addon 系统插件日志。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showClusterConfig(showClusterConfigRequest?: ShowClusterConfigRequest): Promise<ShowClusterConfigResponse>;
    /**
     * 该API用于查询CCE服务下指定集群支持配置的参数列表。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定集群支持配置的参数列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showClusterConfigurationDetails(showClusterConfigurationDetailsRequest?: ShowClusterConfigurationDetailsRequest): Promise<ShowClusterConfigurationDetailsResponse>;
    /**
     * 该API用于通过集群ID获取集群访问的地址，包括PrivateIP(HA集群返回VIP)与PublicIP
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群访问的地址
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showClusterEndpoints(showClusterEndpointsRequest?: ShowClusterEndpointsRequest): Promise<ShowClusterEndpointsResponse>;
    /**
     * 获取集群升级相关信息
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级相关信息
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showClusterUpgradeInfo(showClusterUpgradeInfoRequest?: ShowClusterUpgradeInfoRequest): Promise<ShowClusterUpgradeInfoResponse>;
    /**
     * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - 该接口通常使用场景为：
     * &gt;   - 创建、删除集群时，查询相应任务的进度。
     * &gt;   - 创建、删除节点时，查询相应任务的进度。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务信息
     * @param {string} jobId 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse>;
    /**
     * 该API用于通过节点ID获取指定节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showNode(showNodeRequest?: ShowNodeRequest): Promise<ShowNodeResponse>;
    /**
     * 该API用于获取指定节点池的详细信息。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showNodePool(showNodePoolRequest?: ShowNodePoolRequest): Promise<ShowNodePoolResponse>;
    /**
     * 该API用于查询指定节点池支持配置的参数内容。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定节点池支持配置的参数内容
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showNodePoolConfigurations(showNodePoolConfigurationsRequest?: ShowNodePoolConfigurationsRequest): Promise<ShowNodePoolConfigurationsResponse>;
    /**
     * 获取分区详情
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分区详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} partitionName 分区名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showPartition(showPartitionRequest?: ShowPartitionRequest): Promise<ShowPartitionResponse>;
    /**
     * 获取集群升级前检查任务详情，任务ID由调用集群检查API后从响应体中uid字段获取。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级前检查任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} taskId 升级任务ID，调用集群升级API后从响应体中uid字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showPreCheck(showPreCheckRequest?: ShowPreCheckRequest): Promise<ShowPreCheckResponse>;
    /**
     * 该API用于查询CCE服务下的资源配额。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CCE服务下的资源配额
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse>;
    /**
     * 获取指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showRelease(showReleaseRequest?: ShowReleaseRequest): Promise<ShowReleaseResponse>;
    /**
     * 查询指定模板实例历史记录
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定模板实例历史记录
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showReleaseHistory(showReleaseHistoryRequest?: ShowReleaseHistoryRequest): Promise<ShowReleaseHistoryResponse>;
    /**
     * 获取集群升级任务详情，任务ID由调用集群升级API后从响应体中uid字段获取。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} taskId 升级任务ID，调用集群升级API后从响应体中uid字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showUpgradeClusterTask(showUpgradeClusterTaskRequest?: ShowUpgradeClusterTaskRequest): Promise<ShowUpgradeClusterTaskResponse>;
    /**
     * 该API用于通过升级引导任务ID获取任务的详细信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定集群升级引导任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} upgradeWorkflowId 集群升级任务引导流程ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showUpgradeWorkFlow(showUpgradeWorkFlowRequest?: ShowUpgradeWorkFlowRequest): Promise<ShowUpgradeWorkFlowResponse>;
    /**
     * 获取用户模板配额
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户模板配额
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showUserChartsQuotas(showUserChartsQuotasRequest?: ShowUserChartsQuotasRequest): Promise<ShowUserChartsQuotasResponse>;
    /**
     * 更新插件实例的功能。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新AddonInstance
     * @param {string} id 插件实例id
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} updateAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest): Promise<UpdateAddonInstanceResponse>;
    /**
     * 更新模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {any} content 模板包文件
     * @param {string} [parameters] 上传模板的配置参数，示例如下：\\\&quot;{\\\\\\\&quot;override\\\\\\\&quot;:true,\\\\\\\&quot;skip_lint\\\\\\\&quot;:true,\\\\\\\&quot;source\\\\\\\&quot;:\\\\\\\&quot;package\\\\\\\&quot;}\\\&quot; - skip_lint: whether lint uploaded chart - override: whether override existed chart - visible: update chart visible
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateChart(updateChartRequest?: UpdateChartRequest): Promise<UpdateChartResponse>;
    /**
     * 该API用于更新指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定的集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterInformation} updateClusterRequestBody spec是集合类的元素类型，用户对需要管理的集群对象进行详细描述的主体部分都在spec中给出。系统通过spec的描述来创建或更新对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCluster(updateClusterRequest?: UpdateClusterRequest): Promise<UpdateClusterResponse>;
    /**
     * 该API用于通过集群ID绑定、解绑集群公网apiserver地址
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定、解绑集群公网apiserver地址
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MasterEIPRequest} masterEIPBody 绑定或解绑集群公网apiserver地址的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateClusterEip(updateClusterEipRequest?: UpdateClusterEipRequest): Promise<UpdateClusterEipResponse>;
    /**
     * 用户可以选择集群管理节点上哪些组件的日志上报LTS
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置集群日志
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterLogConfig} updateClusterLogConfigRequestBody 集群日志上报配的置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateClusterLogConfig(updateClusterLogConfigRequest?: UpdateClusterLogConfigRequest): Promise<UpdateClusterLogConfigResponse>;
    /**
     * 该API用于更新指定的节点。
     * &gt; - 当前仅支持更新metadata下的name字段，即节点的名字。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定的节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterNodeInformation} updateNodeRequestBody metadata是节点对象的元数据定义，是集合类的元素类型，包含一组由不同名称定义的属性。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNode(updateNodeRequest?: UpdateNodeRequest): Promise<UpdateNodeResponse>;
    /**
     * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     *
     *
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。若此次更新未设置相关值，默认更新为初始值。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodePoolUpdate} updateNodePoolRequestBody 更新节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest): Promise<UpdateNodePoolResponse>;
    /**
     * 该API用于修改CCE服务下指定节点池配置参数的值。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定节点池配置参数的值
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateClusterConfigurationsBody} updateNodePoolConfigurationRequestBody 批量更新指定节点池配置参数的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNodePoolConfiguration(updateNodePoolConfigurationRequest?: UpdateNodePoolConfigurationRequest): Promise<UpdateNodePoolConfigurationResponse>;
    /**
     * 更新分区
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新分区
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} partitionName 分区名称
     * @param {PartitionReqBody} updatePartitionRequestBody 请求body参数说明；非单个参数名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePartition(updatePartitionRequest?: UpdatePartitionRequest): Promise<UpdatePartitionResponse>;
    /**
     * 更新指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {UpdateReleaseReqBody} updateReleaseRequestBody 更新release的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRelease(updateReleaseRequest?: UpdateReleaseRequest): Promise<UpdateReleaseResponse>;
    /**
     * 集群升级。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {UpgradeClusterRequestBody} upgradeClusterRequestBody 集群升级请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeCluster(upgradeClusterRequest?: UpgradeClusterRequest): Promise<UpgradeClusterResponse>;
    /**
     * 该API用于更新指定集群升级引导任务状态，当前仅适用于取消升级流程
     * 调用该API时升级流程引导任务状态不能为进行中(running) 已完成(success) 已取消(cancel),升级子任务状态不能为running(进行中) init(已初始化) pause(任务被暂停) queue(队列中)
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定集群升级引导任务状态
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} upgradeWorkflowId 集群升级任务引导流程ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpgradeWorkFlowUpdateRequestBody} upgradeWorkFlowUpdateRequestBody 更新集群升级流程引导任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeWorkFlowUpdate(upgradeWorkFlowUpdateRequest?: UpgradeWorkFlowUpdateRequest): Promise<UpgradeWorkFlowUpdateResponse>;
    /**
     * 上传模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传模板
     * @param {string} contentType 消息体的类型（格式）
     * @param {any} content 模板包文件
     * @param {string} [parameters] 上传模板的配置参数，示例如下：\\\&quot;{\\\\\\\&quot;override\\\\\\\&quot;:true,\\\\\\\&quot;skip_lint\\\\\\\&quot;:true,\\\\\\\&quot;source\\\\\\\&quot;:\\\\\\\&quot;package\\\\\\\&quot;}\\\&quot;  - skip_lint: 是否验证上传的模板 - override: 是否覆盖已存在的模板 - visible: 模板是否可见
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadChart(uploadChartRequest?: UploadChartRequest): Promise<UploadChartResponse>;
    /**
     * 该API用于查询CCE服务当前支持的API版本信息列表。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse>;
}
export declare const ParamCreater: () => {
    /**
     * 该API用于在指定集群下纳管节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    addNode(addNodeRequest?: AddNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    awakeCluster(awakeClusterRequest?: AwakeClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于批量添加指定集群的资源标签。
     * &gt; - 每个集群支持最多20个资源标签。
     * &gt; - 此接口为幂等接口：创建时，如果创建的标签已经存在（key/value均相同视为重复），默认处理成功；key相同，value不同时会覆盖原有标签。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于批量删除指定集群的资源标签。
     * &gt; - 此接口为幂等接口：删除时，如果删除的标签key不存在，默认处理成功。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 继续执行被暂停的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    continueUpgradeClusterTask(continueUpgradeClusterTaskRequest?: ContinueUpgradeClusterTaskRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 根据提供的插件模板，安装插件实例。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。该API待废弃，请使用Kubernetes PVC相关接口。
     *
     *
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](cce_02_0242.xml)添加节点。
     *
     *
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createCluster(createClusterRequest?: CreateClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 集群备份
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createClusterMasterSnapshot(createClusterMasterSnapshotRequest?: CreateClusterMasterSnapshotRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取指定集群的证书信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于在指定集群下创建节点。
     * &gt; - 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createNode(createNodeRequest?: CreateNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     *
     * 1.21版本的集群创建节点池时支持绑定安全组，每个节点池最多绑定五个安全组。
     *
     * 更新节点池的安全组后，只针对新创的pod生效，建议驱逐节点上原有的pod。
     *
     * &gt; 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createNodePool(createNodePoolRequest?: CreateNodePoolRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 创建分区
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createPartition(createPartitionRequest?: CreatePartitionRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 集群升级后确认，该接口建议配合Console使用，主要用于升级步骤完成后，客户确认集群状态和业务正常后做反馈。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createPostCheck(createPostCheckRequest?: CreatePostCheckRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 集群升级前检查
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createPreCheck(createPreCheckRequest?: CreatePreCheckRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 创建模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createRelease(createReleaseRequest?: CreateReleaseRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于创建一个集群升级流程引导任务。请在调用本接口完成引导任务创建之后，通过集群升级前检查开始检查任务。
     * 升级流程任务用于控制集群升级任务的执行流程，执行流程为 升级前检查 &#x3D;&gt; 集群升级 &#x3D;&gt; 升级后检查。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    createUpgradeWorkFlow(createUpgradeWorkFlowRequest?: CreateUpgradeWorkFlowRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 删除插件实例的功能。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 删除模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteChart(deleteChartRequest?: DeleteChartRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。该API待废弃，请使用Kubernetes PVC相关接口。
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于删除一个指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteCluster(deleteClusterRequest?: DeleteClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于删除指定的节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteNode(deleteNodeRequest?: DeleteNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于删除指定的节点池。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 删除指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    deleteRelease(deleteReleaseRequest?: DeleteReleaseRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 下载模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    downloadChart(downloadChartRequest?: DownloadChartRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 集群休眠用于将运行中的集群置于休眠状态，休眠后，将不再收取控制节点资源费用。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群所有已安装插件实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 插件模板查询接口，查询插件信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取模板列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listCharts(listChartsRequest?: ListChartsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群备份任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listClusterMasterSnapshotTasks(listClusterMasterSnapshotTasksRequest?: ListClusterMasterSnapshotTasksRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级特性开关配置
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listClusterUpgradeFeatureGates(listClusterUpgradeFeatureGatesRequest?: ListClusterUpgradeFeatureGatesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listClusterUpgradePaths(listClusterUpgradePathsRequest?: ListClusterUpgradePathsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取指定项目下所有集群的详细信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listClusters(listClustersRequest?: ListClustersRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取集群下所有节点池。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - nodepool是集群中具有相同配置的节点实例的子集。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listNodePools(listNodePoolsRequest?: ListNodePoolsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于通过集群ID获取指定集群下所有节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listNodes(listNodesRequest?: ListNodesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取分区列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listPartitions(listPartitionsRequest?: ListPartitionsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级前检查任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listPreCheckTasks(listPreCheckTasksRequest?: ListPreCheckTasksRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取模板实例列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listReleases(listReleasesRequest?: ListReleasesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级任务详情列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listUpgradeClusterTasks(listUpgradeClusterTasksRequest?: ListUpgradeClusterTasksRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取历史集群升级引导任务列表
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    listUpgradeWorkFlows(listUpgradeWorkFlowsRequest?: ListUpgradeWorkFlowsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于在指定集群下迁移节点到另一集群。
     *
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    migrateNode(migrateNodeRequest?: MigrateNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 暂停集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest?: PauseUpgradeClusterTaskRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于在指定集群下移除节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    removeNode(removeNodeRequest?: RemoveNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于在指定集群下重置节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    resetNode(resetNodeRequest?: ResetNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于变更一个指定集群的规格。
     *
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/usermanual-cce/cce_10_0403.html)。](tag:hws)
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/intl/zh-cn/usermanual-cce/cce_10_0403.html)](tag:hws_hk)
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    resizeCluster(resizeClusterRequest?: ResizeClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 重新执行失败的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    retryUpgradeClusterTask(retryUpgradeClusterTaskRequest?: RetryUpgradeClusterTaskRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 将插件实例回滚到升级前的版本。只有在当前插件实例版本支持回滚到升级前的版本（status.isRollbackable为true），且插件实例状态为running（运行中）、available（可用）、abnormal（不可用）、upgradeFailed（升级失败）、rollbackFailed（回滚失败）时支持回滚。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    rollbackAddonInstance(rollbackAddonInstanceRequest?: RollbackAddonInstanceRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 获取插件实例详情。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showChart(showChartRequest?: ShowChartRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取模板Values
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showChartValues(showChartValuesRequest?: ShowChartValuesRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取指定集群的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showCluster(showClusterRequest?: ShowClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群组件上报的LTS的配置信息
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showClusterConfig(showClusterConfigRequest?: ShowClusterConfigRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于查询CCE服务下指定集群支持配置的参数列表。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showClusterConfigurationDetails(showClusterConfigurationDetailsRequest?: ShowClusterConfigurationDetailsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于通过集群ID获取集群访问的地址，包括PrivateIP(HA集群返回VIP)与PublicIP
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showClusterEndpoints(showClusterEndpointsRequest?: ShowClusterEndpointsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级相关信息
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showClusterUpgradeInfo(showClusterUpgradeInfoRequest?: ShowClusterUpgradeInfoRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - 该接口通常使用场景为：
     * &gt;   - 创建、删除集群时，查询相应任务的进度。
     * &gt;   - 创建、删除节点时，查询相应任务的进度。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showJob(showJobRequest?: ShowJobRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于通过节点ID获取指定节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showNode(showNodeRequest?: ShowNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于获取指定节点池的详细信息。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showNodePool(showNodePoolRequest?: ShowNodePoolRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于查询指定节点池支持配置的参数内容。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showNodePoolConfigurations(showNodePoolConfigurationsRequest?: ShowNodePoolConfigurationsRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取分区详情
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showPartition(showPartitionRequest?: ShowPartitionRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级前检查任务详情，任务ID由调用集群检查API后从响应体中uid字段获取。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showPreCheck(showPreCheckRequest?: ShowPreCheckRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于查询CCE服务下的资源配额。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showQuotas(showQuotasRequest?: ShowQuotasRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showRelease(showReleaseRequest?: ShowReleaseRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 查询指定模板实例历史记录
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showReleaseHistory(showReleaseHistoryRequest?: ShowReleaseHistoryRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取集群升级任务详情，任务ID由调用集群升级API后从响应体中uid字段获取。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showUpgradeClusterTask(showUpgradeClusterTaskRequest?: ShowUpgradeClusterTaskRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 该API用于通过升级引导任务ID获取任务的详细信息。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showUpgradeWorkFlow(showUpgradeWorkFlowRequest?: ShowUpgradeWorkFlowRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 获取用户模板配额
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showUserChartsQuotas(showUserChartsQuotasRequest?: ShowUserChartsQuotasRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
    /**
     * 更新插件实例的功能。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 更新模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateChart(updateChartRequest?: UpdateChartRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于更新指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateCluster(updateClusterRequest?: UpdateClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于通过集群ID绑定、解绑集群公网apiserver地址
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateClusterEip(updateClusterEipRequest?: UpdateClusterEipRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 用户可以选择集群管理节点上哪些组件的日志上报LTS
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateClusterLogConfig(updateClusterLogConfigRequest?: UpdateClusterLogConfigRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于更新指定的节点。
     * &gt; - 当前仅支持更新metadata下的name字段，即节点的名字。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateNode(updateNodeRequest?: UpdateNodeRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     *
     *
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     *
     * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。若此次更新未设置相关值，默认更新为初始值。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于修改CCE服务下指定节点池配置参数的值。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateNodePoolConfiguration(updateNodePoolConfigurationRequest?: UpdateNodePoolConfigurationRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 更新分区
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updatePartition(updatePartitionRequest?: UpdatePartitionRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 更新指定模板实例
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    updateRelease(updateReleaseRequest?: UpdateReleaseRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 集群升级。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    upgradeCluster(upgradeClusterRequest?: UpgradeClusterRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于更新指定集群升级引导任务状态，当前仅适用于取消升级流程
     * 调用该API时升级流程引导任务状态不能为进行中(running) 已完成(success) 已取消(cancel),升级子任务状态不能为running(进行中) init(已初始化) pause(任务被暂停) queue(队列中)
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    upgradeWorkFlowUpdate(upgradeWorkFlowUpdateRequest?: UpgradeWorkFlowUpdateRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 上传模板
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    uploadChart(uploadChartRequest?: UploadChartRequest): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
        data: {};
    };
    /**
     * 该API用于查询CCE服务当前支持的API版本信息列表。
     *
     * Please refer to HUAWEI cloud API Explorer for details.
     */
    showVersion(): {
        method: string;
        url: string;
        contentType: string;
        queryParams: {};
        pathParams: {};
        headers: {};
    };
};
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
//# sourceMappingURL=CceClient.d.ts.map