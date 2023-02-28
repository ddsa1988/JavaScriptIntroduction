"use strict";

const consoleRead = require("prompt-sync")();

const pricePerPerson = 20;
const pricePerFish = 12;

let people = 0;
let fish = 0;
let result = 0;

while (true) {
    people = Number(consoleRead("Type the number of people: "));
    const isDataValid = Number.isInteger(people) && people > 0;

    if (isDataValid) {
        break;
    }

    console.log("Invalid number!");
}

while (true) {
    fish = Number(consoleRead("Type the number of fish: "));

    const isDataValid = Number.isInteger(fish) && fish > 0;

    if (isDataValid) {
        break;
    }

    console.log("Invalid number!");
}

if (fish <= people) {
    result = people * pricePerPerson;
} else {
    result = people * pricePerPerson + (fish - people) * pricePerFish;
}

console.log(`Amount to be paid R$: ${result.toFixed(2)}`);
