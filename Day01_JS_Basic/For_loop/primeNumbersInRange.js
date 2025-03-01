const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is: ${fact}`);
}

rl.question('Enter a number: ', (input) => {
    factorial(parseInt(input));
    rl.close();
});
