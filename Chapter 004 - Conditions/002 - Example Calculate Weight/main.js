"use strict";

const inName = document.querySelector("#inName");
const inMale = document.querySelector("#inMale");
const inFemale = document.querySelector("#inFemale");
const inHeight = document.querySelector("#inHeight");
const inSubmit = document.querySelector("#inSubmit");
const inReset = document.querySelector("#inReset");
const outResponse = document.querySelector("#outResponse");

function init() {
    // location.reload();
    outResponse.textContent = "";
    inName.focus();
}

inSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const name = String(inName.value).trim();
    const height = Number(inHeight.value);
    const isMale = inMale.checked;
    const isFemale = inFemale.checked;
    const value = isMale ? 22 : isFemale ? 21 : 0;
    const checkData =
        name !== "" &&
        Number.isFinite(height) &&
        height > 0 &&
        height < 3 &&
        value !== 0;

    if (checkData) {
        const result = value * (height * 2);
        outResponse.textContent = `${name}: Your ideal weight is ${result} kg.`;
    }
});

inReset.addEventListener("click", (event) => {
    init();
});
