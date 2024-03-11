import { NodeManagement } from './NodeManagement';
import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeSpec } from './NodeSpec';
import { SecurityID } from './SecurityID';
export declare class NodePoolSpec {
    type?: NodePoolSpecTypeEnum | string;
    nodeTemplate?: NodeSpec;
    initialNodeCount?: number;
    autoscaling?: NodePoolNodeAutoscaling;
    nodeManagement?: NodeManagement;
    podSecurityGroups?: Array<SecurityID>;
    customSecurityGroups?: Array<string>;
    constructor(nodeTemplate?: NodeSpec);
    withType(type: NodePoolSpecTypeEnum | string): NodePoolSpec;
    withNodeTemplate(nodeTemplate: NodeSpec): NodePoolSpec;
    withInitialNodeCount(initialNodeCount: number): NodePoolSpec;
    withAutoscaling(autoscaling: NodePoolNodeAutoscaling): NodePoolSpec;
    withNodeManagement(nodeManagement: NodeManagement): NodePoolSpec;
    withPodSecurityGroups(podSecurityGroups: Array<SecurityID>): NodePoolSpec;
    withCustomSecurityGroups(customSecurityGroups: Array<string>): NodePoolSpec;
}
/**
    * @export
    * @enum {string}
    */
export declare enum NodePoolSpecTypeEnum {
    VM = "vm",
    ELASTICBMS = "ElasticBMS",
    PM = "pm"
}
//# sourceMappingURL=NodePoolSpec.d.ts.map