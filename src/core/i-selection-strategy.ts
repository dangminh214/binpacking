// Generic interface for Greedy rankings
/**
 * Generic interface for a selection strategy (Auswahlstrategie).
 * T is the type of item (e.g., IItem or Rectangle). [Source 6]
 */
export interface ISelectionStrategy<I> {
    /**
     * Sorts or selects the order in which items should be placed.
     * @param items unsorted items
     */
    orderItems(items: I[]): I[];

    // getNextItem(): I;
}
