const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arithmeticOperations(a, b, c) {
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    let maxResult = Math.max(result1, result2, result3, result4);
    let minResult = Math.min(result1, result2, result3, result4);

    console.log(`Result 1: a + b * c = ${result1}`);
    console.log(`Result 2: a % b + c = ${result2}`);
    console.log(`Result 3: c + a / b = ${result3}`);
    console.log(`Result 4: a * b + c = ${result4}`);
    console.log(`Maximum Result: ${maxResult}`);
    console.log(`Minimum Result: ${minResult}`);
}

rl.question('Enter value for a: ', (a) => {
    rl.question('Enter value for b: ', (b) => {
        rl.question('Enter value for c: ', (c) => {
            arithmeticOperations(parseInt(a), parseInt(b), parseInt(c));
            rl.close();
        });
    });
});
