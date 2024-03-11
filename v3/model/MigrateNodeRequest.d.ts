import { MigrateNodesTask } from './MigrateNodesTask';
export declare class MigrateNodeRequest {
    private 'cluster_id'?;
    private 'target_cluster_id'?;
    private 'Content-Type'?;
    body?: MigrateNodesTask;
    constructor(clusterId?: string, targetClusterId?: string, contentType?: string);
    withClusterId(clusterId: string): MigrateNodeRequest;
    set clusterId(clusterId: string | undefined);
    get clusterId(): string | undefined;
    withTargetClusterId(targetClusterId: string): MigrateNodeRequest;
    set targetClusterId(targetClusterId: string | undefined);
    get targetClusterId(): string | undefined;
    withContentType(contentType: string): MigrateNodeRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: MigrateNodesTask): MigrateNodeRequest;
}
//# sourceMappingURL=MigrateNodeRequest.d.ts.map