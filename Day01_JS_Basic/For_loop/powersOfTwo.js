const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function powersOfTwo(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}

rl.question('Enter a number n: ', (input) => {
    powersOfTwo(parseInt(input));
    rl.close();
});
