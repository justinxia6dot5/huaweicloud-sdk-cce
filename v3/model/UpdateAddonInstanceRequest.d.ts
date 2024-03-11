import { InstanceRequest } from './InstanceRequest';
export declare class UpdateAddonInstanceRequest {
    id?: string;
    private 'Content-Type'?;
    body?: InstanceRequest;
    constructor(id?: string, contentType?: string);
    withId(id: string): UpdateAddonInstanceRequest;
    withContentType(contentType: string): UpdateAddonInstanceRequest;
    set contentType(contentType: string | undefined);
    get contentType(): string | undefined;
    withBody(body: InstanceRequest): UpdateAddonInstanceRequest;
}
//# sourceMappingURL=UpdateAddonInstanceRequest.d.ts.map