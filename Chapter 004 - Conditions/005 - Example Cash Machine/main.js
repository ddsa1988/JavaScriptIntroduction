"use strict";

const inForm = document.querySelector("form");
const outResponse1 = document.querySelector("#outResponse1");
const outResponse2 = document.querySelector("#outResponse2");
const outResponse3 = document.querySelector("#outResponse3");

const init = () => {
    outResponse1.innerText = "";
    outResponse2.innerText = "";
    outResponse3.innerText = "";
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();
    init();

    const value = Number(inForm.inNumber.value);
    const isDataValid = Number.isInteger(value) && value >= 10 && !(value % 10);

    let remainder = 0;

    if (isDataValid) {
        const hundredBills = Math.floor(value / 100);

        remainder = value % 100;

        const fiftyBills = Math.floor(remainder / 50);
        remainder = remainder % 50;

        const tenBills = Math.floor(remainder / 10);
        remainder = remainder % 10;

        if (hundredBills > 0) {
            outResponse1.innerText = `Hundred Bills R$ 100: ${hundredBills}`;
        }

        if (fiftyBills > 0) {
            outResponse2.innerText = `Hundred Bills R$ 50: ${fiftyBills}`;
        }

        if (tenBills > 0) {
            outResponse3.innerText = `Hundred Bills R$ 10: ${tenBills}`;
        }
    }
});
