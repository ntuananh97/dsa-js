// Question: Sum of all natural numbers from 1 to n

function sumOfNumber(n) {
    let sum = 0
    for (let index = 0; index <= n; index++) {
        sum += index
    }
    return sum
}
const n = 2
console.log('sum n', n, sumOfNumber(n));
