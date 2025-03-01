const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function powersOfTwo(n) {
    let i = 0;
    while (Math.pow(2, i) <= 256 && i <= n) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
        i++;
    }
}

rl.question('Enter a number n: ', (input) => {
    powersOfTwo(parseInt(input));
    rl.close();
});
