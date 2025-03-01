const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberPlace(number) {
    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        default:
            console.log("Invalid input. Please enter 1, 10, 100, or 1000.");
    }
}

rl.question('Enter a number (1, 10, 100, or 1000): ', (input) => {
    numberPlace(parseInt(input));
    rl.close();
});
