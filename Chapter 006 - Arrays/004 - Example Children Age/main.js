"use strict";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");

const children = [];

const clearFields = () => {
    inForm.reset();
    inForm.inName.focus();
    outResponse.innerText = "";
};

const showData = (arr) => {
    const text = arr.reduce((previousValue, { name, age }) => {
        return previousValue + `${name} - ${age} years \n`;
    }, "");
    return text;
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = String(inForm.inName.value).trim();
    const age = Number(inForm.inAge.value);

    const isNameValid = name !== "" && name !== "undefined" && name !== "null";
    const isAgeValid = Number.isInteger(age) && age >= 0 && age <= 16;

    if (inForm.checkValidity && isNameValid && isAgeValid) {
        children.push({ name, age });
        clearFields();
        inForm.inBtList.dispatchEvent(new Event("click"));
    } else {
        window.alert("Invalid data!");
    }
});

inForm.inBtList.addEventListener("click", () => {
    if (children.length > 0) {
        outResponse.innerText = showData(children);
    } else {
        outResponse.innerText = "There are no children in the list!";
    }
});

inForm.inBtListAge.addEventListener("click", () => {
    if (children.length > 0) {
    } else {
        outResponse.innerText = "There are no children in the list!";
    }
});
