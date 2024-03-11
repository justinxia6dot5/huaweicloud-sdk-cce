export declare class ClusterCert {
    server?: string;
    private 'certificate-authority-data'?;
    private 'insecure-skip-tls-verify'?;
    constructor();
    withServer(server: string): ClusterCert;
    withCertificateAuthorityData(certificateAuthorityData: string): ClusterCert;
    set certificateAuthorityData(certificateAuthorityData: string | undefined);
    get certificateAuthorityData(): string | undefined;
    withInsecureSkipTlsVerify(insecureSkipTlsVerify: boolean): ClusterCert;
    set insecureSkipTlsVerify(insecureSkipTlsVerify: boolean | undefined);
    get insecureSkipTlsVerify(): boolean | undefined;
}
//# sourceMappingURL=ClusterCert.d.ts.map