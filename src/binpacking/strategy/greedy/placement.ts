import { GreedyPlacement } from "@/algorithm/greedy/placement-strategy";
import type { Box } from "@/binpacking/classes/box";
import type { Rectangle } from "@/binpacking/classes/rectangle";
import type { Solution } from "@/algorithm/solution";

export class BottomLeftPlacer extends GreedyPlacement<
    Rectangle,
    Solution<Box>
> {
    protected canPlace(item: Rectangle, solution: Solution<Box>): boolean {
        const boxes = solution.getItems();

        for (const box of boxes) {
            // original orientation
            if (this.canPlaceInABox(item, box)) {
                return true;
            }

            // rotated orientation (only if it changes something)
            if (item.getWidth() !== item.getHeight()) {
                item.rotate();
                const possible = this.canPlaceInABox(item, box);
                item.rotate(); // restore orientation

                if (possible) {
                    return true;
                }
            }
        }

        return false;
    }

    private canPlaceInABox(item: Rectangle, box: Box): boolean {
        // 1. bottom-left corner
        if (box.checkPossible(item, { x: 0, y: 0 })) {
            return true;
        }

        // 2. bottom-left positions induced by placed rectangles
        for (const placed of box.getRectangles()) {
            // to the right
            if (
                box.checkPossible(item, {
                    x: placed.position.x! + placed.getWidth(),
                    y: placed.position.y!,
                })
            ) {
                return true;
            }

            // above
            if (
                box.checkPossible(item, {
                    x: placed.position.x!,
                    y: placed.position.y! + placed.getHeight(),
                })
            ) {
                return true;
            }
        }

        return false;
    }

    protected add() {}
}
