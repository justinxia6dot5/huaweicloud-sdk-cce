import { AddNode } from './AddNode';
export declare class AddNodeList {
    apiVersion?: string;
    kind?: string;
    nodeList?: Array<AddNode>;
    constructor(apiVersion?: string, kind?: string, nodeList?: Array<AddNode>);
    withApiVersion(apiVersion: string): AddNodeList;
    withKind(kind: string): AddNodeList;
    withNodeList(nodeList: Array<AddNode>): AddNodeList;
}
//# sourceMappingURL=AddNodeList.d.ts.map