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
        const groupAge = new Map();
        let text = "";

        for (const { name, age } of children) {
            if (groupAge.has(age)) {
                groupAge.get(age).push(name);
            } else {
                groupAge.set(age, [name]);
            }
        }

        for (const [age, name] of groupAge.entries()) {
            const percent = ((name.length / children.length) * 100).toFixed(2);
            text += `${age} years: ${name.length} children - ${percent}% \n (${name})\n \n`;
        }

        outResponse.innerText = text;
        console.log(groupAge);
    } else {
        outResponse.innerText = "There are no children in the list!";
    }
});
