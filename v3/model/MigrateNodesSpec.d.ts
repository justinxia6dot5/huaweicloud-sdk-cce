import { Login } from './Login';
import { MigrateNodeExtendParam } from './MigrateNodeExtendParam';
import { NodeItem } from './NodeItem';
import { Runtime } from './Runtime';
export declare class MigrateNodesSpec {
    os?: string;
    extendParam?: MigrateNodeExtendParam;
    login?: Login;
    runtime?: Runtime;
    nodes?: Array<NodeItem>;
    constructor(os?: string, login?: Login, nodes?: Array<NodeItem>);
    withOs(os: string): MigrateNodesSpec;
    withExtendParam(extendParam: MigrateNodeExtendParam): MigrateNodesSpec;
    withLogin(login: Login): MigrateNodesSpec;
    withRuntime(runtime: Runtime): MigrateNodesSpec;
    withNodes(nodes: Array<NodeItem>): MigrateNodesSpec;
}
//# sourceMappingURL=MigrateNodesSpec.d.ts.map