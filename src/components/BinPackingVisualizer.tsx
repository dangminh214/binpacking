import { useState } from "react";
import { Greedy } from "@/algorithm/greedy";
import { Rectangle } from "@/binpacking/classes/rectangle";
import { AreaGreedyStrategy } from "@/binpacking/strategy/greedy/selection";
import { BottomLeftPlacer } from "@/binpacking/strategy/greedy/placer";
import { AlgSolution } from "@/binpacking/algorithm-solution";
import { ConfigController } from "./config/ConfigController";
import { SolutionStats } from "./solution-visualization/SolutionStats";
import { SolutionVisualization } from "./solution-visualization/SolutionVisualization";

export function BinPackingVisualizer() {
    const [solution, setSolution] = useState<AlgSolution | null>(null);
    const [config, setConfig] = useState({
        instanceNumber: 1000,
        minW: 1,
        maxW: 20,
        minH: 1,
        maxH: 20,
        boxL: 30,
    });

    const generateAndSolve = () => {
        const rectangles: Rectangle[] = [];
        for (let i = 0; i < config.instanceNumber; i++) {
            const w =
                Math.floor(Math.random() * (config.maxW - config.minW + 1)) +
                config.minW;
            const h =
                Math.floor(Math.random() * (config.maxH - config.minH + 1)) +
                config.minH;
            rectangles.push(new Rectangle(i, w, h));
        }

        const selection = new AreaGreedyStrategy(rectangles);
        const placer = new BottomLeftPlacer(config.boxL);
        const algSol = new AlgSolution();
        const alg = new Greedy(algSol, selection, placer);
        const sol = alg.solve();

        setSolution(sol);
    };

    // Get first 5 and last 5 boxes
    const getDisplayBoxes = () => {
        if (!solution || solution.items.length === 0) return [];

        const boxes = solution.items;
        const totalBoxes = boxes.length;

        if (totalBoxes <= 10) {
            return boxes;
        }

        const firstFive = boxes.slice(0, 5);
        const lastFive = boxes.slice(-5);

        return [...firstFive, ...lastFive];
    };

    const displayBoxes = getDisplayBoxes();
    const totalBoxes = solution?.items.length || 0;
    const hiddenBoxes = totalBoxes > 10 ? totalBoxes - 10 : 0;

    return (
        <div className="flex bg-gray-50">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mx-5">
                    Bin Packing Visualizer
                </h1>

                <ConfigController
                    config={config}
                    setConfig={setConfig}
                    generateAndSolve={generateAndSolve}
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
