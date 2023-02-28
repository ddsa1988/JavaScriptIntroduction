"use strict";

const consoleRead = require("prompt-sync")();
const maxTimes = 6;
const minValue = 20;

let price = 0;

while (true) {
    price = Number(consoleRead("Purchase Price R$: "));

    const isDataValid = Number.isFinite(price) && price > 0;

    if (isDataValid) {
        break;
    }
}

const aux = Math.floor(price / minValue);
const numberOfTimes = aux === 0 ? 1 : aux > maxTimes ? maxTimes : aux;
const finalValue = price / numberOfTimes;

console.log(`Value R$: ${finalValue.toFixed(2)}`);
console.log(`Number of Times: ${numberOfTimes}`);
