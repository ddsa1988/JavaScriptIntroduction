"use strict";

const inForm = document.querySelector("form");
const responseName = document.querySelector("#outResponseName");
const responseList = document.querySelector("#outResponseList");

const pacientList = [];

const isNameValid = (name) => {
    return name !== "" ? true : false;
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = String(inForm.inPacient.value).trim();

    if (isNameValid(name)) {
        console.log(name);
    }
});
