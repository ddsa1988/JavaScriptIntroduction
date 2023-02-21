"use strict";

const prompt = require("prompt-sync")();

let number = 0;

while (true) {
    number = Number(prompt("Type a number: "));

    if (Number.isFinite(number)) break;

    console.log("Invalid number!");
}

console.log(`Neighbour numbers: ${number - 1} and ${number + 1}.`);
