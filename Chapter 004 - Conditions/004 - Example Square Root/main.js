"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("h3");

inForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const isDataValid = Number.isInteger(number) && number >= 0;

    if (isDataValid) {
        const squareRoot = Math.sqrt(number);

        const msg = Number.isInteger(squareRoot)
            ? `Root: ${squareRoot}`
            : `There is no exact square root to ${number}`;

        outResponse.innerText = msg;
    }
});
