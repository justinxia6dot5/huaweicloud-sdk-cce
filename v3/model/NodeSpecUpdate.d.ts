import { Login } from './Login';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
export declare class NodeSpecUpdate {
    taints?: Array<Taint>;
    k8sTags?: {
        [key: string]: string;
    };
    userTags?: Array<UserTag>;
    initializedConditions?: Array<string>;
    login?: Login;
    constructor(taints?: Array<Taint>, k8sTags?: {
        [key: string]: string;
    }, userTags?: Array<UserTag>);
    withTaints(taints: Array<Taint>): NodeSpecUpdate;
    withK8sTags(k8sTags: {
        [key: string]: string;
    }): NodeSpecUpdate;
    withUserTags(userTags: Array<UserTag>): NodeSpecUpdate;
    withInitializedConditions(initializedConditions: Array<string>): NodeSpecUpdate;
    withLogin(login: Login): NodeSpecUpdate;
}
//# sourceMappingURL=NodeSpecUpdate.d.ts.map