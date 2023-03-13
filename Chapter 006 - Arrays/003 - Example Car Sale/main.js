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

        for (const { model, price } of cars) {
            text = text.concat(`${model} - R$: ${price.toFixed(2)} \n`);
        }

        outResponse.innerText = text;
    } else {
        outResponse.innerText = "There are no cars to list!";
    }
});

inForm.inBtFilter.addEventListener("click", () => {
    if (cars.length > 0) {
        const filterPrice = Number(
            window.prompt("Type the maximum value to be paid: ")
        );
        const isPriceValid = Number.isFinite(filterPrice) && filterPrice > 0;

        if (isPriceValid) {
            const filteredCars = cars.filter(({ model, price }) => {
                return price <= filterPrice;
            });

            if (filteredCars.length > 0) {
                let text = "List of filtered cars: \n" + "-".repeat(40) + "\n";

                for (const { model, price } of filteredCars) {
                    text = text.concat(`${model} - R$: ${price.toFixed(2)} \n`);
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
        const discount = Number(
            window.prompt("Type the percent discount value [1 to 100]: ")
        );
        const isDiscountValid =
            Number.isFinite(discount) && discount > 0 && discount <= 100;

        if (isDiscountValid) {
            const discountValue = 1 - discount / 100;

            let text = "List of cars with discount: \n" + "-".repeat(40) + "\n";

            const discountCars = cars.map(({ model, price }) => {
                return { model, price: price * discountValue };
            });

            for (const { model, price } of discountCars) {
                text = text.concat(`${model} - R$: ${price} \n`);
            }
            outResponse.innerText = text;
        } else {
            window.alert("Invalid number!");
        }
    } else {
        outResponse.innerText = "There are no cars to list!";
    }
});
