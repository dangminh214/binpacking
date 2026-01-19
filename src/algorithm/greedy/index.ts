// Generic Logic (No React, No CSS)
// Pure TS: implements the Greedy logic
import { Solution } from "@/core/solution";
import type { IItem } from "@/core/i-item";
import type { GreedyPlacement } from "./placement-strategy";
import type { GreedySelection } from "./selection-strategy";

export class Greedy<I extends IItem, S extends Solution> {
    // the init solution will be extended while the algorithm runnning
    selectionStrategy: GreedySelection<I>; // e.g, first fit descending
    placementStrategy: GreedyPlacement<I, S>; //e.g. bottom left placement
    solution: S;

    constructor(
        initSolution: S,
        selectionStrategy: GreedySelection<I>,
        placementStrategy: GreedyPlacement<I, S>,
    ) {
        this.solution = initSolution;
        this.selectionStrategy = selectionStrategy;
        this.placementStrategy = placementStrategy;
    }

    /**
     * Executes the greedy approach.
     * @param problem The problem instance providing unplaced items.
     * @param placement The specific selection strategy to use.
     * @param onStep Optional callback for the GUI to visualize progress
     */
    solve(items: I[]): S {
        const start = performance.now();

        // 1. Get the raw data from the problem
        // const items = this.selection.getUnplacedItems();

        // 2. Order items based on the selection strategy (e.g., Area, Longest Side)
        const orderedItems = this.selectionStrategy.orderItems(items);

        // 3. Get the next item based on strategy
        // const item = this.selectionStrategy.getNextItem();

        // 3. Start with an empty solution state
        // because the items are already ordered, if they are fine, add them imidiatly
        for (let i = 0; i < orderedItems.length; i++) {
            this.placementStrategy.checkThenAdd(items[i], this.solution);
        }

        // set runtime for the solution
        const runtime = performance.now() - start;
        this.solution.setRunTime(runtime);

        return this.solution;
    }
}
