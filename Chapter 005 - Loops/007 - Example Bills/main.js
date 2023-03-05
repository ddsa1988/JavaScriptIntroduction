"use strict";

const consoleRead = require("prompt-sync")();

const value = Number(consoleRead("Value R$: "));
const num = Number(consoleRead("In how many time would like to pay: "));

const isValueValid = Number.isFinite(value) && value > 0;
const isNumValid = Number.isInteger(num) && value > 0;

if (isValueValid && isNumValid) {
    const portionValue = Math.trunc(value / num);
    const lastPortion = portionValue + (value % num);

    console.log(`Value R$: ${value}`);
    console.log(`Portions: ${portionValue}`);

    for (let i = 0; i < num - 1; i++) {
        console.log(`${i + 1}ª Portion: R$ ${portionValue.toFixed(2)}`);
    }
    console.log(`${num}ª Portion: R$ ${lastPortion.toFixed(2)}`);
} else {
    console.log("Invalid Data!");
}
