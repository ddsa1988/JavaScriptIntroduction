"use strict";

const inForm = document.querySelector("form");
const outResponse1 = document.querySelector("#outResponse1");
const outResponse2 = document.querySelector("#outResponse2");

function init() {
    outResponse1.innerText = "";
    outResponse2.innerText = "";
}

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    init();

    const number = Number(inForm.inNumber.value);
    const isNumberValid = Number.isInteger(number) && number > 0;

    if (isNumberValid) {
        let sum = 0;
        let outText1 = `Divisors of ${number}: `;
        let outText2 = "";

        for (let i = 0; i < number; i++) {
            if (number % i === 0) {
                sum += i;
                outText1 += `${i}, `;
            }
        }

        outText1 = outText1.slice(0, outText1.length - 2) + ` (Sum: ${sum})`;
        outResponse1.innerText = outText1;

        outText2 = number === sum ? "" : "not";

        outResponse2.innerText = `${number} is ${outText2} a perfect number.`;
    } else {
        console.log("Invalid Data!");
    }
});
