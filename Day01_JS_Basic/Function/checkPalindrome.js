const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(num) {
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

function checkPalindrome(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`Both numbers ${num1} and ${num2} are palindromes.`);
    } else {
        console.log(`One or both numbers are not palindromes.`);
    }
}

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        checkPalindrome(num1, num2);
        rl.close();
    });
});
