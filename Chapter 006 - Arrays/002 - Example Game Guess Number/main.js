"use strict";

const inForm = document.querySelector("form");
const outErrors = document.querySelector("#outErrors");
const outChances = document.querySelector("#outChances");
const outTips = document.querySelector("#outTips");

const CHANCES = 6;
const MIN_RANDOM = 1;
const MAX_RANDOM = 100;

const errors = new Set();
let randomNumber = 0;

const initGame = () => {
    randomNumber = Math.trunc(
        Math.random() * (MAX_RANDOM - MIN_RANDOM + 1) + MIN_RANDOM
    );

    errors.clear();

    inForm.inNumber.disabled = false;
    inForm.inNumber.value = "";
    outErrors.innerText = "";
    outChances.innerText = CHANCES;
    outTips.innerText = `It's a number between ${MIN_RANDOM} and ${MAX_RANDOM}.`;
};

initGame();

const wonGame = () => {
    inForm.inBtSubmit.className = "hidden";
    inForm.inBtNew.className = "show";
    inForm.inNumber.disabled = true;
    outTips.innerText = `Congratulations!!! You won! The number was ${randomNumber}.`;
};

const wrongNumber = (number, setList) => {
    const counter = CHANCES - setList.size;
    setList.add(number);

    inForm.inNumber.value = "";
    outErrors.innerText = `(${[...setList].join(", ")})`;
    outChances.innerText = counter;

    if (counter <= 0) {
        lostGame();
    } else {
        tip(number, randomNumber);
    }
};

const lostGame = () => {
    outTips.innerText = `Don't be sad!!! You lost! The number was ${randomNumber}.`;
    inForm.inBtSubmit.className = "hidden";
    inForm.inBtNew.className = "show";
    inForm.inNumber.value = "";
    inForm.inNumber.disabled = true;
};

const tip = (number, guessNumber) => {
    if (number < guessNumber) {
        outTips.innerText = "You have to guess a higher number!";
    } else if (number > guessNumber) {
        outTips.innerText = "You have to guess a lower number!";
    }
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = Number(inForm.inNumber.value);
    const isNumberValid = inForm.checkValidity() && Number.isFinite(number);

    if (isNumberValid) {
        if (number === randomNumber) {
            wonGame(number);
        } else {
            if (errors.has(number)) {
                outTips.innerText = `You have alread tried the number ${number}. Try another!`;
            } else {
                wrongNumber(number, errors);
            }
        }
    }
});

inForm.inBtNew.addEventListener("click", () => {
    initGame();
});
