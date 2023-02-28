"use strict";

const consoleRead = require("prompt-sync")();

let number = 0;

while (true) {
    number = Number(
        consoleRead("Write an integer number between 100 and 1000: ")
    );

    const isDataValid =
        Number.isInteger(number) && number >= 100 && number <= 1000;

    if (isDataValid) {
        break;
    }
}

const reverseNumber = Number(String(number).split("").reverse().join(""));
console.log(`The number ${number} reversed is ${reverseNumber}.`);

// const numberString = String(number);
// let reverseNumber = "";

// for (let i = numberString.length - 1; i >= 0; i--) {
//     reverseNumber += numberString[i];
// }
// console.log(Number(reverseNumber));
