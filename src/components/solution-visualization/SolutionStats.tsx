import type { AlgSolution } from "@/binpacking/algorithm-solution";
import { PANELCLASS } from "../tw-classes";

interface SolutionProps {
    solution: AlgSolution | null;
    hiddenBoxes: number;
}

export const SolutionStats: React.FC<SolutionProps> = ({
    solution,
    hiddenBoxes,
}) => {
    return (
        <div className={`${PANELCLASS} w-100`}>
            <h2 className="text-xl font-semibold mb-2">Solution</h2>
            <p className="text-gray-700">
                <span className="font-medium">Boxes used:</span>{" "}
                {solution!.items.length}
            </p>

            <p className="text-gray-700">
                <span className="font-medium">Runtime:</span>{" "}
                {solution!.getFormattedRunTime()}
            </p>

            {hiddenBoxes > 0 && (
                <p className="text-gray-600 text-sm mt-2">
                    Showing first 5 and last 5 boxes ({hiddenBoxes} boxes
                    hidden)
                </p>
            )}
        </div>
    );
};
