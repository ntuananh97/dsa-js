// Question: Count the number of digits of a number

function countNumberOfDigits(num) {
    const stringNum = num.toString();
    const stringNumLength = stringNum.length
    let sum = 0
    for (let index = 0; index < stringNumLength; index++) {
        const digit = +stringNum[index]
        sum += digit
    }
    return sum
}
const n = 234
console.log('sum n', n, countNumberOfDigits(n));
