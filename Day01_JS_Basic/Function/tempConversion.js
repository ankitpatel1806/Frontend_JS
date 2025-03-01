const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemperature(degree, choice) {
    switch (choice) {
        case '1':
            if (degree >= 0 && degree <= 100) {
                let degF = (degree * 9/5) + 32;
                console.log(`${degree}°C = ${degF}°F`);
            } else {
                console.log("Invalid input! Please enter a degree between 0°C and 100°C.");
            }
            break;
        case '2':
            if (degree >= 32 && degree <= 212) {
                let degC = (degree - 32) * 5/9;
                console.log(`${degree}°F = ${degC.toFixed(2)}°C`);
            } else {
                console.log("Invalid input! Please enter a degree between 32°F and 212°F.");
            }
            break;
        default:
            console.log("Invalid choice.");
            break;
    }
}

rl.question('Enter your conversion choice: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius \nYour choice: ', (choice) => {
    rl.question('Enter the temperature: ', (degree) => {
        convertTemperature(parseFloat(degree), choice);
        rl.close();
    });
});
