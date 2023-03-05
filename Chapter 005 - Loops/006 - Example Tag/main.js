"use strict";

const consoleRead = require("prompt-sync")();

const tagName = String(consoleRead("Type the product name: ")).trim();
const tagQuantity = Number(consoleRead("Type the tag quantity: "));
console.log();

const isTagNameValid = tagName !== "";
const isTagQuantityValid = Number.isInteger(tagQuantity) && tagQuantity > 0;

if (isTagNameValid && isTagQuantityValid) {
    console.log(`Number of tags: ${tagQuantity}`);
    for (let i = 0; i < (tagQuantity - 1) / 2; i++) {
        console.log(`${tagName} ${tagName.padStart(30)}`);
    }

    if (tagQuantity % 2 === 1) {
        console.log(tagName);
    }
} else {
    console.log("Invalid data!");
}
