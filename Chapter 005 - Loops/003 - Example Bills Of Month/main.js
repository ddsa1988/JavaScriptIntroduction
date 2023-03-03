"use strict";

const inForm = document.querySelector("form");
const outResponse1 = document.querySelector("#outResponse1");
const outResponse2 = document.querySelector("#outResponse2");

let numberBills = 0;
let total = 0;
let answer = "";

function init() {
    outResponse1.innerText = "";
    outResponse2.innerText = "";

    numberBills = 0;
    total = 0;
    answer = "";
}

inForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const description = String(inForm.inDescription.value).trim();
    const value = Number(inForm.inValue.value);

    const isDescriptionValid = description !== "";
    const isValueValid = Number.isFinite(value) && value > 0;

    if (isDescriptionValid && isValueValid) {
        numberBills++;
        total += value;

        answer += `${description} - R$: ${value} \n`;
        const textTotal = `${numberBills} Bills - Total R$: ${total}`;

        outResponse1.innerText = `${answer} ${"-".repeat(30)}`;
        outResponse2.innerText = textTotal;
    }
});

inForm.addEventListener("reset", () => {
    init();
});
