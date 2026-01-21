export const STRATEGY = {
    AREA: "area",
    HEIGHT: "height",
} as const;

export const NEIGHBORHOOD = {
    GEOMETRY: "Geometry-based",
    RULE: "Rule-based",
    OVERLAP: "Partially Overlapped",
} as const;

export const PLACEMENT = {
    BOTTOMLEFT: "bottomLeft",
} as const;

export const ALGORITHMS = {
    GREEDY: "greedy",
    LOCALSEARCH: "localSearch",
} as const;

export const algorithmOptions = [
    { value: ALGORITHMS.GREEDY, label: "Greedy Algorithm" },
    { value: ALGORITHMS.LOCALSEARCH, label: "Local Search" },
];

export const selectionStrategyOptions = {
    greedy: [
        { value: STRATEGY.AREA, label: "Area Descending" },
        { value: STRATEGY.HEIGHT, label: "Height Descending" },
    ],
    localSearch: [
        { value: NEIGHBORHOOD.GEOMETRY, label: NEIGHBORHOOD.GEOMETRY },
    ],
};

export const placementStrategyOptions = {
    greedy: [{ value: PLACEMENT.BOTTOMLEFT, label: "Bottom-Left Placement" }],
    localSearch: [
        { value: PLACEMENT.BOTTOMLEFT, label: "Bottom-Left Placement" },
    ],
};

export const DEFAULT_CONFIG = {
    instanceNumber: 1000,
    minW: 1,
    maxW: 20,
    minH: 1,
    maxH: 20,
    boxL: 50,
};
