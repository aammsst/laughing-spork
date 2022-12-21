"use strict";
function greeter(fn) {
    fn("Hello, world!");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter2(fn) {
    fn("Hi from greeter2");
}
greeter2(printToConsole);
function foo(callback) {
    console.log("this is foo function");
    const number = callback();
    console.log(`foo function received ${number}\nand it's square root is:`);
    return Math.sqrt(number);
}
function bar() {
    console.log("this is the bar function");
    return Math.round(Math.random() * 10);
}
console.log(foo(bar));
function foo2(callback) {
    console.log("this is foo2");
    return callback();
}
function bar2() {
    console.log("bar2");
    return 2;
}
console.log(foo2(bar2));
console.log("type of the return of foo2: ", typeof (foo2(bar2)));
function foo3(callback) {
    console.log("foo3");
    const numberReceived = callback();
    console.log(`foo3 has received a function that returns ${numberReceived}`);
    return numberReceived;
}
function bar3() {
    console.log("bar3");
    return 3;
}
console.log(foo3(bar3));
function firstElement(arr) {
    return arr[0];
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const b = firstElement([true, false, true]);
const u = firstElement([]);
function myMap(arr, func) {
    return arr.map(func);
}
const parse = myMap(["1", "2", "3"], (n) => parseInt(n));
const unParse = myMap([1, 2, 3], (n) => n.toString());
