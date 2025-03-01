const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function unitConversion(option, value) {
    switch (option) {
        case 1:
            console.log(`${value} Feet = ${value * 12} Inches`);
            break;
        case 2:
            console.log(`${value} Inches = ${value / 12} Feet`);
            break;
        case 3:
            console.log(`${value} Feet = ${value * 0.3048} Meters`);
            break;
        case 4:
            console.log(`${value} Meters = ${value / 0.3048} Feet`);
            break;
        default:
            console.log("Invalid option.");
    }
}

console.log("Select the conversion option:");
console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");

rl.question('Enter the conversion option (1-4): ', (option) => {
    rl.question('Enter the value to convert: ', (value) => {
        unitConversion(parseInt(option), parseFloat(value));
        rl.close();
    });
});
