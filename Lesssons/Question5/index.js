// Question: Fibonacci Number
// Given n, calculate F(n) in Fibonacci
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) (n > 1)

function calcFnInFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return calcFnInFibonacci(n-1) + calcFnInFibonacci(n-2)
}
const n = 9
console.log('sum n', n, calcFnInFibonacci(n));
