"use strict";
function foo(callback) {
    console.log("fooo");
    const number = callback();
    console.log(`the number received is ${number}\nand it's square root is:`);
    return Math.sqrt(number);
}
function bar() {
    console.log("bar");
    return Math.random() * 10;
}
console.log(foo(bar));
