import { Login } from './Login';
import { NodeItem } from './NodeItem';
export declare class RemoveNodesSpec {
    login?: Login;
    nodes?: Array<NodeItem>;
    constructor(login?: Login, nodes?: Array<NodeItem>);
    withLogin(login: Login): RemoveNodesSpec;
    withNodes(nodes: Array<NodeItem>): RemoveNodesSpec;
}
//# sourceMappingURL=RemoveNodesSpec.d.ts.map