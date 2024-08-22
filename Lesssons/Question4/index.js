// Question: Give a integer number. Return true if it's palindrome number, false otherwise


function checkPalindromeNumber(num) {
    const stringNum = num.toString();
    const stringNumLength = stringNum.length;

    let palindromeNumberInString = '';

    for (let index = (stringNumLength - 1); index >= 0; index--) {
        const digit = stringNum[index];
        palindromeNumberInString += digit
    }
    return stringNum === palindromeNumberInString
}
const n = 321
console.log('sum n', n, checkPalindromeNumber(n));
