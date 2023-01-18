"use strict";
function bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array.length - 1 - i; ++j) {
            if (array[j] > array[j + 1]) {
                let swapper = array[j + 1];
                array[j + 1] = array[j];
                array[j] = swapper;
            }
        }
    }
}
let array3 = [5, 3, 6, 2, 4, 1];
let array4 = [7, 3, 2, 9, 4, 5];
bubbleSort(array3);
bubbleSort(array4);
console.log("- a sorted array -> ", array3);
console.log("- a sorted array -> ", array4);
