"use strict";

const consoleRead = require("prompt-sync")();

const grades = [];

while (true) {
    const name = String(
        consoleRead(console.log("Type the student name: "))
    ).trim();

    const grade = Number(consoleRead(console.log("Type the student grade: ")));

    const isNameValid = name !== "" && name !== "undefined" && name !== "null";
    const isGradeValid = Number.isFinite(grade) && grade >= 0 && grade <= 10;

    if (isNameValid && isGradeValid) {
        grades.push({ name, grade });
    } else {
        console.log("Invalid data!");
    }

    const answer = consoleRead(
        console.log("Would you like to continue? Type 's' for yes: ")
    );

    if (answer.toLowerCase() !== "s") {
        break;
    }
}

console.log("-".repeat(40));

const maxGrade = grades.reduce((previousValue, { name, grade }) => {
    return Math.max(previousValue, grade);
}, 0);

console.log(`The higher grade was ${maxGrade.toFixed(2)}.`);

if (maxGrade >= 7) {
    for (const { name, grade } of grades) {
        if (grade === maxGrade) {
            console.log(`Student: ${name} - Grade: ${grade.toFixed(2)}`);
        }
    }
} else {
    console.log("None of the students got a grade greater than 7.");
}
