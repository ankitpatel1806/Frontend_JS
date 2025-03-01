const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getWeekDay(number) {
    if (number === 1) {
        console.log("Sunday");
    } else if (number === 2) {
        console.log("Monday");
    } else if (number === 3) {
        console.log("Tuesday");
    } else if (number === 4) {
        console.log("Wednesday");
    } else if (number === 5) {
        console.log("Thursday");
    } else if (number === 6) {
        console.log("Friday");
    } else if (number === 7) {
        console.log("Saturday");
    } else {
        console.log("Invalid input. Please enter a number between 1 and 7.");
    }
}

rl.question('Enter a number (1-7) for a day of the week: ', (input) => {
    getWeekDay(parseInt(input));
    rl.close();
});
