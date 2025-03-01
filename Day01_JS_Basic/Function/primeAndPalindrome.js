const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPalindrome(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr);
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindromeNum = getPalindrome(num);
        if (isPrime(palindromeNum)) {
            console.log(`The number ${num} is prime, and its palindrome ${palindromeNum} is also prime.`);
        } else {
            console.log(`The number ${num} is prime, but its palindrome ${palindromeNum} is not prime.`);
        }
    } else {
        console.log(`The number ${num} is not prime.`);
    }
}

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);
    checkPrimeAndPalindrome(num);
    rl.close();
});
