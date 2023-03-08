"use strict";

const inForm = document.querySelector("form");
const outErrors = document.querySelector("#outErrors");
const outChances = document.querySelector("#outChances");
const outTips = document.querySelector("#outTips");

const CHANCES = 6;

const initGame = () => {
    outChances.innerText = CHANCES;
};

initGame();
