"use strict";

const inName = document.querySelector("#inName");
const inMale = document.querySelector("#inMale");
const inFemale = document.querySelector("#inFemale");
const inHeight = document.querySelector("#inHeight");
const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");

function init() {
    // location.reload();
    outResponse.textContent = "";
    inName.focus();
}

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = String(inName.value).trim();
    const height = Number(inHeight.value);
    const isMale = inMale.checked;
    const isFemale = inFemale.checked;
    const value = isMale ? 22 : isFemale ? 21 : 0;
    const isDataValid =
        name !== "" &&
        Number.isFinite(height) &&
        height > 0 &&
        height < 3 &&
        value !== 0;

    if (isDataValid) {
        const result = value * Math.pow(height, 2);
        outResponse.innerText = `${name}: Your ideal weight is ${result.toFixed(
            2
        )} kg.`;
    }
});

inForm.addEventListener("reset", (event) => {
    init();
});
