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
        outResponse.innerText = "There are no cars to list!";
    }
});

inForm.inBtFilter.addEventListener("click", () => {
    if (cars.length > 0) {
        const filterPrice = Number(window.prompt("Type the value: "));
        const isPriceValid = Number.isFinite(filterPrice) && filterPrice > 0;

        if (isPriceValid) {
            const filteredCars = cars.filter(({ model, price }) => {
                return price <= filterPrice;
            });

            if (filteredCars.length > 0) {
                let text = "List of filtered cars: \n" + "-".repeat(40) + "\n";

                for (const { model, price } of filteredCars) {
                    text = text.concat(`${model} - R$: ${price} \n`);
                }
                outResponse.innerText = text;
            } else {
                outResponse.innerText = "There are no cars below this price!";
            }
        } else {
            window.alert("Invalid number!");
        }
    } else {
        outResponse.innerText = "There are no cars to list!";
    }
});

inForm.inBtSimulate.addEventListener("click", () => {
    if (cars.length > 0) {
        const price = Number(window.prompt("Type the value: "));
        const isPriceValid = Number.isFinite(price) && price > 0;

        if (isPriceValid) {
        } else {
            window.alert("Invalid number!");
        }
    } else {
        outResponse.innerText = "There are no cars to list!";
    }
});
