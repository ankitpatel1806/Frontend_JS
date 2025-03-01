const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    let low = 1, high = 100;
    let mid;

    console.log("Think of a number between 1 and 100 (don't tell me).");

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        rl.question(`Is your number greater than ${mid}? (yes/no): `, (response) => {
            if (response === 'yes') {
                low = mid + 1;
            } else if (response === 'no') {
                high = mid - 1;
            }
            if (low === high) {
                console.log(`The magic number is ${low}`);
                rl.close();
            }
        });
    }
}

findMagicNumber();
