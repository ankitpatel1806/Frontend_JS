const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a prime number.`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a prime number.`);
            return;
        }
    }
    console.log(`${num} is a prime number.`);
}

rl.question('Enter a number: ', (input) => {
    isPrime(parseInt(input));
    rl.close();
});
