export interface IPlacementStrategy<I, S> {
    checkThenAdd(item: I, solution: S): boolean;
}
