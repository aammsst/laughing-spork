"use strict";
function twoCristalBalls(breaks) {
    let jump = Math.floor(Math.sqrt(breaks.length));
    for (let i = jump; i < breaks.length; i += jump) {
        if (breaks[i]) {
            i -= jump;
            for (let j = 0; j <= jump && i < breaks.length; ++j) {
                if (breaks[i + j]) {
                    return i + j;
                }
            }
        }
    }
    return -1;
}
let array1 = [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, true, true, true, true,
    true, true, true, true, true, true, true, true, true, true,
    true, true
];
let array2 = [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, true,
    true, true, true, true, true, true, true, true, true, true,
    true, true
];
console.log("this should be 36 -> ", twoCristalBalls(array1));
console.log("this should be 59 -> ", twoCristalBalls(array2));
