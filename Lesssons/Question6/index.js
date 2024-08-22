// Question: Missing number in range
// given array in the range [0, n], n is the number of numbers in array
// return the missing number in that range

function findMissingNumber(arr) {
    const n = arr.length;
    for (let index = 0; index <= n; index++) {
        if (!arr.includes(index)) return index
    }
    return false
}
const arr = [9,6,4,2,3,5,7,0,1]
console.log('sum n', arr, findMissingNumber(arr));
