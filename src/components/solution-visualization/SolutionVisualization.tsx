import type { Box } from "@/binpacking/classes/box";
import { BoxVisualization } from "./BoxVisualization";

interface Props {
    displayBoxes: Box[];
}

export const SolutionVisualization: React.FC<Props> = ({ displayBoxes }) => {
    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {displayBoxes.map((box: Box) => (
                    <BoxVisualization key={box.id} box={box} scale={10} />
                ))}
            </div>
        </div>
    );
};
