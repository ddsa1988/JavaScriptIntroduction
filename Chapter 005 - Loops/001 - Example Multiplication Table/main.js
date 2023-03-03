"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("h3");

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const isNumberValid = Number.isFinite(number) && number >= 0 && number < 10;

    if (isNumberValid) {
        let text = "";

        for (let i = 0; i < 10; i++) {
            text += `${number} x ${i + 1} = ${number * (i + 1)} \n`;
        }

        outResponse.innerText = text;
    }
});
