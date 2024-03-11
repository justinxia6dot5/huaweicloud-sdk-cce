export declare class DeleteStatus {
    private 'previous_total'?;
    private 'current_total'?;
    updated?: number;
    added?: number;
    deleted?: number;
    constructor();
    withPreviousTotal(previousTotal: number): DeleteStatus;
    set previousTotal(previousTotal: number | undefined);
    get previousTotal(): number | undefined;
    withCurrentTotal(currentTotal: number): DeleteStatus;
    set currentTotal(currentTotal: number | undefined);
    get currentTotal(): number | undefined;
    withUpdated(updated: number): DeleteStatus;
    withAdded(added: number): DeleteStatus;
    withDeleted(deleted: number): DeleteStatus;
}
//# sourceMappingURL=DeleteStatus.d.ts.map