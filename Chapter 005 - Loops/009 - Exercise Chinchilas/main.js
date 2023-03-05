"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");

inForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const years = Number(inForm.inYears.value);

    const isNumberValid = Number.isInteger(number) && number > 0;
    const isYearsValid = Number.isInteger(years) && years > 0;

    if (isNumberValid && isYearsValid) {
        let text = "";
        let quantity = 0;

        for (let i = 0; i < years; i++) {
            quantity = i < 1 ? number : quantity * 3;
            text += `${i + 1}º Year: ${quantity} Chinchilas\n`;
        }

        outResponse.innerText = text;
    } else {
        console.log("Invalid Data!");
    }
});
