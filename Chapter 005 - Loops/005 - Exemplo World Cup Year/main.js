"use strict";

const consoleRead = require("prompt-sync")();
let userAnswer = false;

do {
    const year = Number(consoleRead("Year: "));

    if (Number.isFinite(year) && year > 0) {
        if (year === 1942 || year === 1946) {
            console.log(
                `The year of ${year} didn't have World Cup because of the Second World War.`
            );
        } else if (year >= 1930 && year % 4 === 2) {
            console.log(`Yes. ${year} is year of World CUp!`);
        } else {
            console.log(`No... ${year} is not a year of World Cup.`);
        }
    } else {
        console.log("Invalid number!");
    }

    const answer = consoleRead(
        "Would you like to try again? For yes type 's' and for no type 'n': "
    );

    userAnswer = answer.toLowerCase() === "s" ? true : false;
    console.log();
} while (userAnswer);
