// Generic interface for LS neighborhoods
export interface IINeighborhood<S> {
    readonly name: string;

    /**
     * Generates a neighbor solution.
     * Must NOT mutate the input solution.
     */
    generateNeighbor(current: S): S;
}
