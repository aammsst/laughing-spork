// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in wich it will break in the most
// optimized way.

// generalizing, we have a boolean array with false from the beginning,
// until some index value from when the elements of the array are true
// until the end. The index will be the "high enough" distance. We are
// going to determine the index of the first element that is true.

// Since we have two cristal balls, that means that we have two opportunities
// to find the first true element, we are not going to use a binary search,
// because we could break both cristal balls without having found the first 
// true element and a linear search would be just a O(N), it wouldn't be 
// the most optimized way since we would have another ball that is not going
// to be used. Instead we are going to advance through the array by jumping
// a specific amount of indexes, and then when we get the true value,
// we jump back then same amount, and scan with a linear search through
// those elements so we find the very first true value.

// That specific amount should depend on the length of the array, which is N,
// if N is a small number, like 60, a decent amount would be 10, but if N
// is a larger number, like 1000, a decent amount would be 50, let's say.
// In order to generalize, we would take the square root of N as the value
// we are going to jump through the array. Now, instead an O(N) given by the 
// linear search, we would have an O(sqrt(N)).

function twoCristalBalls(breaks: boolean[]): number {

    let jump = Math.floor(Math.sqrt(breaks.length));
    
    for (let i = jump; i < breaks.length; i += jump) {

        if (breaks[i]) { // if true, we have broken the first cristal ball
            i -= jump; // we jump back

            for (let j = 0; j <= jump && i < breaks.length; ++j) {
                // and here we scan the elements until we find the very first true

                if (breaks[i+j]) {
                    return i + j; // index of first true
                }
            }
        }
    }

    return -1; // this means that there is no true elements on the given array
}

let array1 = [
    false, false, false, false, false, false, false, false, false, false,  // 0-9
    false, false, false, false, false, false, false, false, false, false,  // 10-19
    false, false, false, false, false, false, false, false, false, false,  // 20-29
    false, false, false, false, false, false, true, true, true, true,  // 30-39
    true, true, true, true, true, true, true, true, true, true,  // 40-49
    true, true  // 50-51
]


let array2 = [
    false, false, false, false, false, false, false, false, false, false,  // 0-9
    false, false, false, false, false, false, false, false, false, false,  // 10-19
    false, false, false, false, false, false, false, false, false, false,  // 20-29
    false, false, false, false, false, false, false, false, false, false,  // 30-39
    false, false, false, false, false, false, false, false, false, false,  // 40-49
    false, false, false, false, false, false, false, false, false, true,  // 50-59
    true, true, true, true, true, true, true, true, true, true,  // 60-69
    true, true  // 70-71
]

console.log("this should be 36 -> ", twoCristalBalls(array1));
console.log("this should be 59 -> ", twoCristalBalls(array2));
