"use strict";

const consoleRead = require("prompt-sync")();

const maxTimes = 6;
const minValue = 20;

let price = 0;

function getNumberOfTimes(price, maxTimes, minValue) {
    function numberOfTimes(value, maxTimes) {
        const result = value / maxTimes;
        if (result < minValue) {
            return numberOfTimes(value, maxTimes - 1);
        } else {
            return [result, maxTimes];
        }
    }

    if (price > minValue) {
        return numberOfTimes(price, maxTimes, minValue);
    } else {
        return [price, 1];
    }
}

while (true) {
    price = Number(consoleRead("Purchase Price R$: "));

    const isDataValid = Number.isFinite(price) && price > 0;

    if (isDataValid) {
        break;
    }
}

const [finalValue, numberOfTimes] = getNumberOfTimes(price, maxTimes, minValue);
console.log(`Value R$: ${finalValue.toFixed(2)}`);
console.log(`Number of Times: ${numberOfTimes}`);
