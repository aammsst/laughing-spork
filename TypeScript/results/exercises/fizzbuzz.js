"use strict";
let i = 0;
while (i < 100) {
    ++i;
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("fizzbuzz\n");
    }
    else if (i % 3 === 0) {
        console.log("fizz\n");
    }
    else if (i % 5 === 0) {
        console.log("buzz\n");
    }
    else {
        console.log(i + "\n");
    }
}
