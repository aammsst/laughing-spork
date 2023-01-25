// Area of a polygon:
// make a unique function capable of calculating the Area
// of a polygon.
// - the function must receive per parameter only one polygon at a time
// - the allowed polygons are: Triangle, Square, Rectangle
// - Print the area

type polygon = {
    height: number;
    width?: number
}

function Triangle(h: number, w: number): polygon { 
    // 90 Degrees Triangle, 
    // area = h * w * 0.5
    let height = h/2;
    let width = w;
    return {height, width}
}

function Square(h: number): polygon {
    let height = h;
    return {height};
}

function Rectangle(h: number,w: number): polygon{
    let height = h;
    let width = w;
    return {height, width}
}

function area(polygon: polygon): number {
    if (polygon.width == null){ // square case
        return polygon.height ** 2;
    } 
    return (polygon.height * polygon.width);
}

console.log("- Triangle of 7 x 4 = ", area(Triangle(7, 4))) // 14
console.log("- Rectangle of 3 x 5 = ", area(Rectangle(3, 5))) // 15
console.log("- Square of 4 = ", area(Square(4))) // 16
