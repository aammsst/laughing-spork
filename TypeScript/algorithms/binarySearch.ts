// Given a sorted array of numbers and a value, we use a binary search to find the first coincidence of the values
// inside that array, with the value given, if it exist. O(logN)
function binarySearch(array: number[], value: number): boolean {

    let low = 0;
    let high = array.length;

    do {
        let m = Math.floor(low + (high - low)/2);
        if (value === array[m]) {
            return true;
        } else if (value > array[m]) {
            low = m + 1;
        } else { // when (value < array[m])
            high = m;
        }
    } while (low < high);

    return false;
}

// Test
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

binarySearch(array, 15) ? console.log("the value is there") : console.log("the value is NOT there");
binarySearch(array, 3) ? console.log("the value is there") : console.log("the value is NOT there");
binarySearch(array, 18) ? console.log("the value is there") : console.log("the value is NOT there");
