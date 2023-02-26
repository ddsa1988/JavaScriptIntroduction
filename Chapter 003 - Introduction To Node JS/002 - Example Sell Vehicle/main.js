"use strict";

const consoleRead = require("prompt-sync")();
const firstPaymentTax = 1 - 50 / 100;
const numberOfPayments = 12;

const vehicle = String(consoleRead("Vehicle: ")).trim();
const price = Number(consoleRead("Price R$: "));
const firstPayment = Number((price * firstPaymentTax).toFixed(2));
const otherPayments = Number(
    ((price - firstPayment) / numberOfPayments).toFixed(2)
);

if (vehicle === "" || price < 1) {
    console.log("Invalid data!");

    return false;
}

console.log(`Sale: ${vehicle}`);
console.log(`First Payment R$: ${firstPayment}`);
console.log(`+ ${numberOfPayments} of R$: ${otherPayments}`);
