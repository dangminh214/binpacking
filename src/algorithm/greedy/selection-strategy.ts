import type { ISelectionStrategy } from "@/core/i-selection-strategy";

export abstract class GreedySelection<I> implements ISelectionStrategy<I> {
    items: I[];
    index = 0;

    constructor(items: I[]) {
        this.items = items;
    }

    abstract orderItems(items: I[]): I[];
}
