const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function harmonicNumber(n) {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`The ${n}th harmonic number is: ${harmonic}`);
}

rl.question('Enter a number n: ', (input) => {
    harmonicNumber(parseInt(input));
    rl.close();
});
