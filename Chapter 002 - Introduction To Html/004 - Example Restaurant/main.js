"use strict";

// Book page:59

const inPriceKilo = document.querySelector("#inKilo");
const inConsume = document.querySelector("#inConsume");
const inSubmit = document.querySelector("#inSubmit");
const resp = document.querySelector("h3");

inSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const price = Number(inPriceKilo.value);
    const consume = Number(inConsume.value);
    const total = Number(((price / 1000) * consume).toFixed(2));

    if (total > 0) {
        resp.innerText = `Value to pay R$: ${total}`;
    }
});
