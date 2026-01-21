import { CONFIGINPUT, DEFAULTTEXT } from "../tw-classes";
import { Label } from "../ui/label";
import type {
    AlgorithmType,
    SelectionStrategy,
    PlacementStrategy,
} from "./config-types";

import {
    selectionStrategyOptions,
    placementStrategyOptions,
    algorithmOptions,
} from "./config-options";

interface AlgorithmSelectorProps {
    algorithm: AlgorithmType;
    selectionStrategy: SelectionStrategy;
    placementStrategy: PlacementStrategy;
    onAlgorithmChange: (algorithm: AlgorithmType) => void;
    onSelectionStrategyChange: (strategy: SelectionStrategy) => void;
    onPlacementStrategyChange: (strategy: PlacementStrategy) => void;
}

export function AlgorithmSelector({
    algorithm,
    selectionStrategy,
    placementStrategy,
    onAlgorithmChange,
    onSelectionStrategyChange,
    onPlacementStrategyChange,
}: AlgorithmSelectorProps) {
    const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newAlgorithm = e.target.value as AlgorithmType;
        onAlgorithmChange(newAlgorithm);

        // Reset strategies to first available option when algorithm changes
        const firstSelection = selectionStrategyOptions[newAlgorithm][0]
            .value as SelectionStrategy;

        const firstPlacement = placementStrategyOptions[newAlgorithm][0]
            .value as PlacementStrategy;

        onSelectionStrategyChange(firstSelection);
        onPlacementStrategyChange(firstPlacement);
    };

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="algorithm">Algorithm</Label>
                <select
                    id="algorithm"
                    value={algorithm}
                    onChange={handleAlgorithmChange}
                    className={`${DEFAULTTEXT} border-2 border-blue-500`}
                >
                    {algorithmOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Label htmlFor="selectionStrategy">Selection Strategy</Label>
                <select
                    id="selectionStrategy"
                    value={selectionStrategy}
                    onChange={(e) =>
                        onSelectionStrategyChange(
                            e.target.value as SelectionStrategy,
                        )
                    }
                    className={`${CONFIGINPUT}`}
                >
                    {selectionStrategyOptions[algorithm].map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Label htmlFor="placementStrategy">Placement Strategy</Label>
                <select
                    id="placementStrategy"
                    value={placementStrategy}
                    onChange={(e) =>
                        onPlacementStrategyChange(
                            e.target.value as PlacementStrategy,
                        )
                    }
                    className={`${CONFIGINPUT}`}
                >
                    {placementStrategyOptions[algorithm].map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
