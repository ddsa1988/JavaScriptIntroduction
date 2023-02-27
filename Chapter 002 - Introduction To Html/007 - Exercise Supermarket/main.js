"use strict";

// Book page: 61

const inProduct = document.querySelector("#inProduct");
const inPrice = document.querySelector("#inPrice");
const inForm = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");

const itemsWithoutDiscount = 2;
const itemsWithDiscount = 1;
const discount = 50 / 100;

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const product = String(inProduct.value).trim();
    const price = Number(inPrice.value);
    const priceWithDiscount = price * discount;
    const total =
        price * itemsWithoutDiscount + priceWithDiscount * itemsWithDiscount;

    if (product !== "" && price > 0) {
        outResp1.innerText = `${product} - Sale: Take ${
            itemsWithoutDiscount + itemsWithDiscount
        } for R$: ${total.toFixed(2)}`;

        outResp2.innerText = `The 3º product costs R$: ${priceWithDiscount.toFixed(
            2
        )}`;
    }
});
