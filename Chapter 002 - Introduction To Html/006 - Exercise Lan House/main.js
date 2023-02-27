"use strict";

// Book page: 61

const inMinutes = document.querySelector("#inMinutes");
const inPrice = document.querySelector("#inPrice");
const inTime = document.querySelector("#inTime");
const inForm = document.querySelector("form");
const outResp = document.querySelector("#outResp");

const minutes = 15;

inMinutes.innerText = `Price for ${minutes} minutes R$:`;

inForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const price = Number(inPrice.value);
    const time = Math.trunc(Number(inTime.value));
    const total = (price * Math.ceil(time / minutes)).toFixed(2);

    if (price > 0 && time > 0) {
        outResp.innerText = `Value to be paid R$: ${total}`;
    }
});
