export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isClose(p2, play) {
        return ((Math.abs(p2.x - this.x) <= play) || (Math.abs(p2.y - this.y) <= play))
    }
}