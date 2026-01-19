import type { IPlacementStrategy } from "@/core/i-placement";

// If return true then add else skip
// e.g. Bottom Left
export abstract class GreedyPlacement<I, S> implements IPlacementStrategy<
    I,
    S
> {
    checkThenAdd(item: I, solution: S): boolean {
        if (this.canPlace(item, solution)) {
            this.add(item, solution);
            return true;
        }
        return false;
    }

    protected abstract canPlace(item: I, solution: S): boolean;

    /** Mutate solution by inserting the item */
    protected abstract add(item: I, solution: S): void;
}
