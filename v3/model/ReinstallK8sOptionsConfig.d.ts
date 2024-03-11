import { Taint } from './Taint';
export declare class ReinstallK8sOptionsConfig {
    labels?: {
        [key: string]: string;
    };
    taints?: Array<Taint>;
    maxPods?: number;
    nicMultiqueue?: string;
    nicThreshold?: string;
    constructor();
    withLabels(labels: {
        [key: string]: string;
    }): ReinstallK8sOptionsConfig;
    withTaints(taints: Array<Taint>): ReinstallK8sOptionsConfig;
    withMaxPods(maxPods: number): ReinstallK8sOptionsConfig;
    withNicMultiqueue(nicMultiqueue: string): ReinstallK8sOptionsConfig;
    withNicThreshold(nicThreshold: string): ReinstallK8sOptionsConfig;
}
//# sourceMappingURL=ReinstallK8sOptionsConfig.d.ts.map