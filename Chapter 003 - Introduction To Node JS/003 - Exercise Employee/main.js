"use strict";

const consoleRead = require("prompt-sync")();

const salary = Number(consoleRead("Salary: "));
const time = Number(consoleRead("Time in years: "));

if (!(Number.isFinite(salary) && salary > 0)) return false;
if (!(Number.isFinite(time) && time > 0)) return false;

const quadrennium = time / 4;
const extra = salary * (quadrennium / 100);

console.log(`Quadrennium: ${quadrennium}`);
console.log(`Final Salary R$: ${salary + extra}`);
