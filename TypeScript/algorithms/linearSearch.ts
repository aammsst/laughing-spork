// Given a number array and a value, we use a linear serch (O(N)) just to find out wheter the value
// exist inside that array or not
function linearSerch(array: number[], value: number): boolean {
    for(let i=0; i<array.length ; ++i) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
