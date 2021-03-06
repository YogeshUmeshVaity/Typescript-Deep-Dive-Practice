interface Square {
    kind: "square"
    size: number
}

interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}

// Here someone adds a new interface Circle
interface Circle {
    kind: "circle"
    radius: number
}

type Shape = Square | Rectangle | Circle

function area(shape: Shape): number {
    if (shape.kind == "square") {
        return shape.size * shape.size
    } else if (shape.kind == "rectangle") {
        return shape.width * shape.height
    } else if (shape.kind == "circle") {
        return 2 * 3.14 * shape.radius * shape.radius
    } else {
        const _exhaustiveCheck: never = shape   // Error if the case for Circle not covered.
        return _exhaustiveCheck
    }
}