"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fruit = String(inForm.inFruit.value).trim();
    const number = Number(inForm.inNumber.value);

    const isFruitValid = fruit !== "";
    const isValueValid = Number.isInteger(number) && number > 0;

    if (isFruitValid && isValueValid) {
        let text = "";
        for (let i = 0; i < number; i++) {
            text += i < number - 1 ? fruit + " * " : fruit;
        }
        outResponse.innerText = text;
    }
});
