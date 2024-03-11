import { ConfigurationItem } from './ConfigurationItem';
export declare class PackageConfiguration {
    name?: string;
    configurations?: Array<ConfigurationItem>;
    constructor();
    withName(name: string): PackageConfiguration;
    withConfigurations(configurations: Array<ConfigurationItem>): PackageConfiguration;
}
//# sourceMappingURL=PackageConfiguration.d.ts.map