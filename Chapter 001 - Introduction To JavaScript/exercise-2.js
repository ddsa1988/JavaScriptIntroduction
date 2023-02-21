"use strict";

const prompt = require("prompt-sync")();

let bill = 0;
let people = 0;

while (true) {
    bill = Number(prompt("Bill Amount: "));
    people = Number.parseInt(prompt("How many people on the table: "));

    if (Number.isFinite(bill) && bill > 0) {
        if (Number.isFinite(people) && people > 0) break;
    }

    console.log("Invalid number!");
}

const valuePerPerson = bill / people;

console.log(`Value per person R$: ${valuePerPerson}.`);
