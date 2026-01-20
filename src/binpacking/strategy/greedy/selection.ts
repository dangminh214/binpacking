import { GreedySelection } from "@/algorithm/greedy/selection-strategy";
import { Rectangle } from "@/binpacking/classes/rectangle";

export class AreaGreedyStrategy extends GreedySelection<Rectangle> {
    // score(r: Rectangle): number {
    //     return r.area;
    // }

    orderItems(items: Rectangle[]): Rectangle[] {
        return items.sort((a, b) => b.area - a.area);
    }
}

export class HeightGreedyStrategy extends GreedySelection<Rectangle> {
    // score(r: Rectangle): number {
    //     return Math.max(r.Width, r.Height);
    // }

    orderItems(items: Rectangle[]): Rectangle[] {
        return items.sort((a, b) => b.getHeight() - a.getHeight());
    }
}
