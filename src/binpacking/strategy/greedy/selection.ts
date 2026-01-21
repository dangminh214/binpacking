import { GreedySelection } from "@/algorithm/greedy/selection-strategy";
import { Rectangle } from "@/binpacking/classes/rectangle";

export class AreaGreedyStrategy extends GreedySelection<Rectangle> {
    orderItems(items: Rectangle[]): Rectangle[] {
        return items.sort((a, b) => b.area - a.area);
    }
}

export class HeightGreedyStrategy extends GreedySelection<Rectangle> {
    orderItems(items: Rectangle[]): Rectangle[] {
        return items.sort((a, b) => b.getHeight() - a.getHeight());
    }
}
