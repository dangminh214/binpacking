import { useState } from "react";
import {
    ALGORITHMS,
    DEFAULT_CONFIG,
    PLACEMENT,
    STRATEGY,
} from "@/components/config/config-options";
import { generateAndSolve, getDisplayBoxes } from "./final-solution";
import { AlgSolution } from "@/binpacking/algorithm-solution";
import { ConfigController } from "./config/ConfigController";
import { SolutionStats } from "./solution-visualization/SolutionStats";
import { SolutionVisualization } from "./solution-visualization/SolutionVisualization";
import {
    type AlgorithmType,
    type SelectionStrategy,
    type PlacementStrategy,
} from "./config/config-types";
import { AlgorithmSelector } from "@/components/config/AlgorithmConfig";
import { PANELCLASS } from "./tw-classes";

export function BinPackingVisualizer() {
    const [solution, setSolution] = useState<AlgSolution | null>(null);
    const [isSolving, setIsSolving] = useState<boolean>(false);
    const [config, setConfig] = useState(DEFAULT_CONFIG);

    const [algorithm, setAlgorithm] = useState<AlgorithmType>(
        ALGORITHMS.GREEDY,
    );

    const [selectionStrategy, setSelectionStrategy] =
        useState<SelectionStrategy>(STRATEGY.AREA);

    const [placementStrategy, setPlacementStrategy] =
        useState<PlacementStrategy>(PLACEMENT.BOTTOMLEFT);

    const numberOfDisplayBoxs = 4;

    const displayBoxes = getDisplayBoxes(solution!, numberOfDisplayBoxs);
    const totalBoxes = solution?.items.length || 0;
    const hiddenBoxes = totalBoxes > 10 ? totalBoxes - 10 : 0;

    return (
        <div className="flex bg-gray-50">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mx-5">
                    Bin Packing Visualizer
                </h1>

                <div className={PANELCLASS}>
                    <AlgorithmSelector
                        algorithm={algorithm}
                        selectionStrategy={selectionStrategy}
                        placementStrategy={placementStrategy}
                        onAlgorithmChange={setAlgorithm}
                        onSelectionStrategyChange={setSelectionStrategy}
                        onPlacementStrategyChange={setPlacementStrategy}
                    />
                </div>

                <ConfigController
                    config={config}
                    setConfig={setConfig}
                    generateAndSolve={generateAndSolve}
                    isSolving={isSolving}
                    selectionStrategy={selectionStrategy}
                    algorithm={algorithm}
                    setSolution={setSolution}
                    setIsSolving={setIsSolving}
                />

                {solution && (
                    <SolutionStats
                        solution={solution}
                        hiddenBoxes={hiddenBoxes}
                    />
                )}
            </div>

            <div>
                {solution && displayBoxes.length > 0 && (
                    <SolutionVisualization boxes={displayBoxes} />
                )}
            </div>
        </div>
    );
}
