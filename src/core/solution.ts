// Interface for any feasible solution state

/**
 * Generic interface for a solution state.
 * This interface allows algorithms to interact with a problem
 * without knowing its specific rules or geometry.
 */
export abstract class Solution {
    runtime: number; //ms
    constructor() {
        this.runtime = 0;
    }

    setRunTime(runtime: number) {
        this.runtime = runtime;
    }

    getFormattedRunTime(): string {
        return this.runtime.toFixed(2) + " ms";
    }
}
