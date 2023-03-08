"use strict";

const inForm = document.querySelector("form");
const responseName = document.querySelector("#outResponseName");
const responseList = document.querySelector("#outResponseList");

const pacientList = [];

const getName = () => {
    if (inForm.checkValidity()) {
        const name = String(inForm.inPacient.value).trim().toUpperCase();

        return name;
    } else {
        window.alert("Please, write the pacient name!");
        inForm.inPacient.focus();

        return "";
    }
};

const isNameValid = (name) => {
    if (typeof name === "string" && name !== "") {
        return true;
    }

    return false;
};

const manageQueue = (name, action, list) => {
    if (!(isNameValid(name) && !list.includes(name))) {
        return false;
    }

    if (action === "push") {
        list.push(name);
    } else if (action === "unshift") {
        list.unshift(name);
    }

    return true;
};

const printQueue = (list) => {
    let text = "";

    list.forEach((name, index) => {
        text += `${index + 1}. ${name}\n`;
    });

    responseList.innerText = text;
    inForm.inPacient.value = "";
    inForm.inPacient.focus();
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = getName();

    if (isNameValid(name)) {
        if (manageQueue(name, "push", pacientList)) {
            printQueue(pacientList);
        }
    }
});

inForm.inBtUrgent.addEventListener("click", () => {
    const name = getName();

    if (isNameValid(name)) {
        if (manageQueue(name, "unshift", pacientList)) {
            printQueue(pacientList);
        }
    }
});

inForm.inBtAttend.addEventListener("click", () => {
    if (pacientList.length > 0) {
        const next = pacientList.shift();
        responseName.innerText = next;
        printQueue(pacientList);
    } else {
        window.alert("No pacients waiting!");
        responseName.innerText = "";
    }
});
