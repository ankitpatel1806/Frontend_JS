const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gamble() {
    let money = 100;
    let winCount = 0;
    let betCount = 0;

    while (money > 0 && money < 200) {
        const bet = Math.random() < 0.5 ? 1 : -1;
        money += bet;
        betCount++;

        if (bet === 1) {
            winCount++;
        }

        console.log(`Money: Rs ${money}, Wins: ${winCount}, Bets Made: ${betCount}`);
    }

    if (money >= 200) {
        console.log(`You won! Final money: Rs ${money}`);
    } else {
        console.log(`You went broke! Final money: Rs ${money}`);
    }

    rl.close();
}

gamble();
