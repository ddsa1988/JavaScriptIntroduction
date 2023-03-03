"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("h3");

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const isNumberValid = Number.isInteger(number) && number > 0;

    if (isNumberValid) {
        let counter = 0;
        let text = "";

        for (let i = 1; i <= number; i++) {
            counter = number % i === 0 ? ++counter : counter;
        }

        text = counter <= 2 ? "is prime." : "is not prime.";

        outResponse.innerText = `${number} ${text}`;
    }
});
