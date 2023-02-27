"use strict";

const inName = document.querySelector("#inName");
const inGrade1 = document.querySelector("#inGrade1");
const inGrade2 = document.querySelector("#inGrade2");
const inResult = document.querySelector("#inResult");
const outResul1 = document.querySelector("#outResult1");
const outResul2 = document.querySelector("#outResult2");

inResult.addEventListener("click", (event) => {
    event.preventDefault();

    const name = String(inName.value).trim();
    const grade1 = Number(inGrade1.value);
    const grade2 = Number(inGrade2.value);
    const checkData =
        name !== "" &&
        Number.isFinite(grade1) &&
        grade1 >= 0 &&
        grade1 <= 10 &&
        Number.isFinite(grade2) &&
        grade2 >= 0 &&
        grade2 <= 10;

    if (checkData) {
        const result = (grade1 + grade2) / 2;
        let text = "";
        let color = "";

        if (result < 4) {
            text = "You failed! Try again next semester!";
            color = "red";
        } else if (result < 7) {
            text = "You have to do the exam to have a chance to pass!";
            color = "blue";
        } else {
            text = "Congrats! You are approved!";
            color = "green";
        }

        outResul1.innerText = `Average Grade: ${result.toFixed(2)}`;
        outResul2.innerText = text;
        outResul2.style.color = color;
    }
});
