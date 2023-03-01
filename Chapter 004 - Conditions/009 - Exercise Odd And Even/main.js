"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const isNumberValid = Number.isInteger(number) && number >= 0;

    if (isNumberValid) {
        const answer = number % 2 === 0 ? "even" : "odd";
        outResponse.innerText = `${number} is ${answer}.`;
    }
});
