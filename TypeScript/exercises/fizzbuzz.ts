// Write a program that shows the numbers from 1 to 100 (both
// included and with a break line in between each number), 
// but instead of:
// * - Multiples of 3 -> the word "fizz".
// * - Multiples of 5 -> the word "buzz".
// * - Multiples of 3 and 5 -> the word "fizzbuzz".

let i = 0;

while (i < 100) {
    ++i;
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("fizzbuzz\n");
    } else if (i % 3 === 0) {
        console.log("fizz\n");
    } else if (i % 5 === 0) {
        console.log("buzz\n");
    } else {
        console.log(i + "\n")
    }
}

