let dice = document.getElementById("dice");

let result = document.getElementById("result");

function rollDice() {

    let randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber === 1) {

        dice.textContent = "⚀";

    }

    else if (randomNumber === 2) {

        dice.textContent = "⚁";

    }

    else if (randomNumber === 3) {

        dice.textContent = "⚂";

    }

    else if (randomNumber === 4) {

        dice.textContent = "⚃";

    }

    else if (randomNumber === 5) {

        dice.textContent = "⚄";

    }

    else {

        dice.textContent = "⚅";

    }

    result.textContent = " ☘︎  You rolled " + randomNumber ;

}