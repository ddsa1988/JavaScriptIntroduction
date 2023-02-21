"use strict";

const prompt = require("prompt-sync")();

let maxNumbers = 0;
let counter = 0;
let numbers = [];

while (true) {
    maxNumbers = Number(prompt("How many numbers would you like to sum? "));

    if (Number.isInteger(maxNumbers) && maxNumbers > 0) {
        break;
    }

    console.log("Invalid number!");
}

console.log();

while (counter < maxNumbers) {
    const number = Number(prompt(`Type number ${counter + 1}: `));

    if (Number.isFinite(numbers)) {
        numbers.push(number);
        counter++;
    } else {
        console.log("Invalid number!");
    }
}

const sum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);

console.log();
console.log(`The sum is ${sum}.`);
