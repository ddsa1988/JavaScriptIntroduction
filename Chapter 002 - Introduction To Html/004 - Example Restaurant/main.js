"use strict";

// Book page:59

const inPriceKilo = document.querySelector("#inKilo");
const inConsume = document.querySelector("#inConsume");
const inSubmit = document.querySelector("#inSubmit");
const outResp = document.querySelector("#outResp");

inSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const price = Number(inPriceKilo.value);
    const consume = Number(inConsume.value);
    const total = Number(((price / 1000) * consume).toFixed(2));

    if (total > 0) {
        outResp.innerText = `Value to pay R$: ${total}`;
    }
});
