import type { Box } from "@/binpacking/classes/box";
import { BoxVisualization } from "./BoxVisualization";

interface Props {
    boxes: Box[];
}

export const SolutionVisualization: React.FC<Props> = ({ boxes: boxes }) => {
    return (
        <div className="">
            <div className="grid">
                {boxes.map((box: Box) => (
                    <BoxVisualization key={box.id} box={box} scale={5} />
                ))}
            </div>
        </div>
    );
};
