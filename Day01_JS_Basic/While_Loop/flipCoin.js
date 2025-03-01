const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function flipCoin() {
    let heads = 0;
    let tails = 0;

    while (heads < 11 && tails < 11) {
        const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
        if (flip === 'Heads') {
            heads++;
        } else {
            tails++;
        }
        console.log(`Heads: ${heads}, Tails: ${tails}`);
    }

    if (heads === 11) {
        console.log("Heads wins 11 times!");
    } else {
        console.log("Tails wins 11 times!");
    }

    rl.close();
}

flipCoin();
