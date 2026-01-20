import type { Box } from "@/binpacking/classes/box";
import { BoxVisualization } from "./BoxVisualization";

interface Props {
    boxes: Box[];
}

export const SolutionVisualization: React.FC<Props> = ({ boxes: boxes }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-wrap gap-4">
                {boxes.map((box: Box) => (
                    <BoxVisualization key={box.id} box={box} scale={5} />
                ))}
            </div>
        </div>
    );
};
