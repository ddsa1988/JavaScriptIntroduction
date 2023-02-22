"use strict";

// Book page: 56

// Read model and price of a vehicle. Show 50% of the value and the rest in 12x.

const inVehicle = document.querySelector("#inVehicle");
const inPrice = document.querySelector("#inPrice");
const inSubmit = document.querySelector("#inSubmit");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");
const outResp3 = document.querySelector("#outResp3");

const firstPaymentTax = 1 - 50 / 100;
const numberOfPayments = 12;

inSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const vehicle = String(inVehicle.value).trim();
    const price = Number(inPrice.value);
    const firstPayment = Number((price * firstPaymentTax).toFixed(2));
    const otherPayments = Number(
        ((price - firstPayment) / numberOfPayments).toFixed(2)
    );

    console.log(vehicle);
    console.log(firstPayment);
    console.log(otherPayments);
});
