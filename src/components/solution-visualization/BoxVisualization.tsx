import { Box } from "@/binpacking/classes/box";
import { RectangleVisualization } from "./RectangleVisualization";
import { DEFAULTTEXT } from "../tw-classes";

interface BoxVisualizationProps {
    box: Box;
    scale?: number;
}

export function BoxVisualization({ box, scale = 1 }: BoxVisualizationProps) {
    const rectangles = box.getRectangles();
    const boxSize = box.boxL * scale;

    return (
        <div className="bg-white rounded-lg shadow-md p-5 border border-stone-700">
            <h3 className={DEFAULTTEXT}>
                Box {box.id} ({rectangles.length} items)
            </h3>
            <div
                className="relative border-2 border-gray-800 border-dashed box-content"
                style={{ width: boxSize, height: boxSize }}
            >
                {rectangles.map((rect) => (
                    <RectangleVisualization rect={rect} scale={scale} />
                ))}
            </div>
        </div>
    );
}
