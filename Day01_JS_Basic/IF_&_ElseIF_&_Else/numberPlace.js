const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberPlace(number) {
    if (number === 1) {
        console.log("Unit");
    } else if (number === 10) {
        console.log("Ten");
    } else if (number === 100) {
        console.log("Hundred");
    } else if (number === 1000) {
        console.log("Thousand");
    } else {
        console.log("Invalid input. Please enter 1, 10, 100, or 1000.");
    }
}

rl.question('Enter a number (1, 10, 100, or 1000): ', (input) => {
    numberPlace(parseInt(input));
    rl.close();
});
