import { AddonRisks } from './AddonRisks';
import { ConfigurationRisks } from './ConfigurationRisks';
import { DeprecatedAPIRisks } from './DeprecatedAPIRisks';
import { NodeRisks } from './NodeRisks';
export declare class RiskSource {
    configurationRisks?: Array<ConfigurationRisks>;
    deprecatedAPIRisks?: Array<DeprecatedAPIRisks>;
    nodeRisks?: Array<NodeRisks>;
    addonRisks?: Array<AddonRisks>;
    constructor();
    withConfigurationRisks(configurationRisks: Array<ConfigurationRisks>): RiskSource;
    withDeprecatedAPIRisks(deprecatedAPIRisks: Array<DeprecatedAPIRisks>): RiskSource;
    withNodeRisks(nodeRisks: Array<NodeRisks>): RiskSource;
    withAddonRisks(addonRisks: Array<AddonRisks>): RiskSource;
}
//# sourceMappingURL=RiskSource.d.ts.map