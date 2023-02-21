"use strict";

const prompt = require("prompt-sync")();
const grades = [];

let numberOfGrades = 0;
let counter = 0;

while (true) {
    numberOfGrades = Number(
        prompt(
            "How many grades would you like to calculate the average? Number between 0 and 10: "
        )
    );

    if (Number.isInteger(numberOfGrades) && numberOfGrades >= 0) break;
}

while (counter < numberOfGrades) {
    const grade = Number(prompt(`Type grade ${counter + 1}: `));

    if (Number.isFinite(grade) && grade >= 0 && grade <= 10) {
        grades.push(grade);
        counter++;
    }
}

console.log();

const averageGrade =
    grades.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    ) / grades.length;

for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
}

console.log();
console.log(`Average: ${averageGrade}.`);
