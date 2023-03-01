"use strict";

const inForm = document.querySelector("form");
const outResponse1 = document.querySelector("#outResponse1");
const outResponse2 = document.querySelector("#outResponse2");

const meter = new Map([
    [1, 30],
    [2, 60],
    [3, 120],
]);

function init() {
    outResponse1.innerText = "";
    outResponse2.innerText = "";
}

inForm.addEventListener("submit", function (event) {
    event.preventDefault();
    init();

    const value = Number(inForm.inNumber.value);
    const isValueValid = Number.isFinite(value) && value > 0 && value <= 50;

    if (isValueValid) {
        if (value >= 1) {
            const price = value >= 3 ? 3 : value >= 2 ? 2 : 1;
            const change = value - price;
            const time = meter.get(price);

            outResponse1.innerText = `Time: ${time} min`;

            if (change > 0) {
                outResponse2.innerText = `Change R$: ${change.toFixed(2)}`;
            }
        } else {
            outResponse1.innerText = "Insuficient value";
        }
    }
});
