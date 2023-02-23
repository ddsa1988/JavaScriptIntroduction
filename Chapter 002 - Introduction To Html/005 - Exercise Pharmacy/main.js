"use strict";

// Book page: 60

const inMedicine = document.querySelector("#inMedicine");
const inPrice = document.querySelector("#inPrice");
const inSubmit = document.querySelector("#inSubmit");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const numberOfItems = 2;

inSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const medicineName = String(inMedicine.value).trim();
    const price = Number(inPrice.value);
    const sum = Number((price * numberOfItems).toFixed(2));
    const total = Math.trunc(sum);
    const discount = Number((sum - total).toFixed(2));

    resp1.innerText = `Medicine: ${medicineName}`;
    resp2.innerText = `Sale: ${numberOfItems} items for R$ ${total}. Discount of R$ ${discount}!`;
});
