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

export const generateAndSolve = (
    config: UserConfig,
    selectionStrategy: string,
    algorithm: string,
    setSolution: (sol: Solution<Box>) => void,
) => {
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
        selectionStrategy === "area"
            ? new AreaGreedyStrategy(rectangles)
            : new HeightGreedyStrategy(rectangles);

    // Select the appropriate placement strategy
    const placer = new BottomLeftPlacer(config.boxL);

    const algSol = new AlgSolution();

    // Run the selected algorithm
    if (algorithm === "greedy") {
        const alg = new Greedy(algSol, selection, placer);
        const sol = alg.solve();
        setSolution(sol);
    } else {
        // Local search not implemented yet
        console.log("Local search not implemented yet");
    }
};

export const getDisplayBoxes = (solution: AlgSolution) => {
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
