"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("pre");

const cars = [];

const clearFields = () => {
    inForm.inModel.focus();
    inForm.inModel.value = "";
    inForm.inPrice.value = "";
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const model = String(inForm.inModel.value).trim();
    const price = Number(inForm.inPrice.value);

    const isModelValid =
        model !== "" && model !== "undefined" && model !== "null";
    const isPriceValid = Number.isFinite(price) && price > 0;

    if (inForm.checkValidity() && isModelValid && isPriceValid) {
        cars.push({ model, price });
        clearFields();
        inForm.inBtList.dispatchEvent(new Event("click"));
    }
});
