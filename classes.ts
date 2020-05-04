class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

const point1 = new Point(0, 15)
const point2 = new Point(5, 15)
console.log(point1.add(point2));
