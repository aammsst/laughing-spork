"use strict";
function Triangle(h, w) {
    let height = h / 2;
    let width = w;
    return { height, width };
}
function Square(h) {
    let height = h;
    return { height };
}
function Rectangle(h, w) {
    let height = h;
    let width = w;
    return { height, width };
}
function area(polygon) {
    if (polygon.width == null) {
        return polygon.height ** 2;
    }
    return (polygon.height * polygon.width);
}
console.log("- Triangle of 7 x 4 = ", area(Triangle(7, 4)));
console.log("- Rectangle of 3 x 5 = ", area(Rectangle(3, 5)));
console.log("- Square of 4 = ", area(Square(4)));
