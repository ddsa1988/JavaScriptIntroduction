"use strict";

//Book page: 45

const inName = document.querySelector("#inName");
const inForm = document.querySelector("form");
const outResponse = document.querySelector("h3");

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = String(inName.value).trim();
    outResponse.innerText = "";

    if (name !== "") {
        outResponse.innerText = `Hello ${name}.`;
    }
});
