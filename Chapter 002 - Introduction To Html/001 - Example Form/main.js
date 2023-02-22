"use strict";

//Book page: 45

const inName = document.querySelector("#inName");
const submit = document.getElementById("inSubmit");
const answer = document.querySelector("h3");

button.addEventListener("click", function (event) {
    event.preventDefault();

    const name = String(inName.value).trim();
    answer.innerText = "";

    if (name !== "") answer.innerText = `Hello ${name}.`;
});
