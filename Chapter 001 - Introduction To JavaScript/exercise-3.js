"use strict";

const prompt = require("prompt-sync")();
const discount = 1 - 10 / 100;
const divide = 3;

let price = 0;

while (true) {
    price = Number(prompt("Product price: "));

    if (Number.isFinite(price) && price > 0) break;
}

const finalPrice = price * discount;
const dividedPrice = price / divide;

console.log(
    `Price R$: ${price}. \nPrice with discount R$: ${finalPrice}. \nPrice divided R$: ${dividedPrice}.`
);
