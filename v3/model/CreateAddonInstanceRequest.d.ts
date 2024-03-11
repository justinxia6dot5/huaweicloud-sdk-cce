import { InstanceRequest } from './InstanceRequest';
export declare class CreateAddonInstanceRequest {
    private 'Content-Type'?;
    body?: InstanceRequest;
    constructor(contentType?: string);
    withContentType(contentType: string): CreateAddonInstanceRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: InstanceRequest): CreateAddonInstanceRequest;
}
//# sourceMappingURL=CreateAddonInstanceRequest.d.ts.map