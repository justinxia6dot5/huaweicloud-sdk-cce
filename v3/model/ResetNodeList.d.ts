import { ResetNode } from './ResetNode';
export declare class ResetNodeList {
    apiVersion?: string;
    kind?: string;
    nodeList?: Array<ResetNode>;
    constructor(apiVersion?: string, kind?: string, nodeList?: Array<ResetNode>);
    withApiVersion(apiVersion: string): ResetNodeList;
    withKind(kind: string): ResetNodeList;
    withNodeList(nodeList: Array<ResetNode>): ResetNodeList;
}
//# sourceMappingURL=ResetNodeList.d.ts.map