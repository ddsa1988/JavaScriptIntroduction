"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("pre");

const cars = [];

const clearFields = () => {
    inForm.inModel.focus();
    inForm.inModel.value = "";
    inForm.inPrice.value = "";
    outResponse.innerText = "";
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

inForm.inBtList.addEventListener("click", () => {
    if (cars.length > 0) {
        let text = "List of cars to be sold: \n" + "-".repeat(40) + "\n";

        // text = cars.reduce(
        //     (previousValue, currentValue) =>
        //         previousValue +
        //         `${currentValue.model} - R$: ${currentValue.price} \n`,
        //     text
        // );

        for (const { model, price } of cars) {
            text = text.concat(`${model} - R$: ${price} \n`);
        }

        outResponse.innerText = text;
    } else {
        outResponse.innerText = "No car is in the list!";
    }
});

inForm.inBtFilter.addEventListener("click", () => {});

inForm.inBtSimulate.addEventListener("click", () => {});
