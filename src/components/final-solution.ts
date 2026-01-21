import { Rectangle } from "@/binpacking/classes/rectangle";
import type { UserConfig } from "./config/ConfigController";
import {
    AreaGreedyStrategy,
    HeightGreedyStrategy,
} from "@/binpacking/strategy/greedy/selection";
import { BottomLeftPlacer } from "@/binpacking/strategy/greedy/placer";
import { AlgSolution } from "@/binpacking/algorithm-solution";
import { Greedy } from "@/algorithm/greedy";
import type { Solution } from "@/algorithm/abstract-solution";
import type { Box } from "@/binpacking/classes/box";
import { ALGORITHMS, STRATEGY } from "./config/config-options";

export const generateAndSolve = async (
    config: UserConfig,
    selectionStrategy: string,
    algorithm: string,
    setSolution: (sol: Solution<Box>) => void,
    setIsSolving: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    setIsSolving(true);
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

    // Select the appropriate selection strategy
    const selection =
        selectionStrategy === STRATEGY.AREA
            ? new AreaGreedyStrategy(rectangles)
            : new HeightGreedyStrategy(rectangles);

    // Select the appropriate placement strategy
    const placer = new BottomLeftPlacer(config.boxL);

    const algSol = new AlgSolution();

    // Run the selected algorithm
    await new Promise((resolve) => setTimeout(resolve, 0)); // Let React render
    if (algorithm === ALGORITHMS.GREEDY) {
        const alg = new Greedy(algSol, selection, placer);
        let sol;
        try {
            sol = alg.solve();
        } finally {
            setSolution(sol!);
            setIsSolving(false);
        }
    } else {
        // Local search not implemented yet
        console.log("Local search not implemented yet");
    }
};

export const getDisplayBoxes = (
    solution: AlgSolution,
    numbBoxDisplay: number,
) => {
    if (!solution || solution.items.length === 0) return [];

    const boxes = solution.items;
    const totalBoxes = boxes.length;

    if (totalBoxes <= 10) {
        return boxes;
    }

    const firstDisplayBox = boxes.slice(0, numbBoxDisplay / 2);
    const lastDisplayBox = boxes.slice(-(numbBoxDisplay / 2));

    return [...firstDisplayBox, ...lastDisplayBox];
};
