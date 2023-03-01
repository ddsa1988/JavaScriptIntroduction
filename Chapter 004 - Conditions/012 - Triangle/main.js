"use strict";

const inForm = document.querySelector("form");
const outResponse1 = document.querySelector("#outResponse1");
const outResponse2 = document.querySelector("#outResponse2");

const init = () => {
    outResponse1.innerText = "";
    outResponse2.innerText = "";
};

inForm.addEventListener("submit", function (event) {
    event.preventDefault();
    init();

    const sideA = Number(inForm.inSideA.value);
    const sideB = Number(inForm.inSideB.value);
    const sideC = Number(inForm.inSideC.value);

    const isSideAValid = Number.isFinite(sideA) && sideA >= 1;
    const isSideBValid = Number.isFinite(sideB) && sideB >= 1;
    const isSideCValid = Number.isFinite(sideC) && sideC >= 1;

    if (isSideAValid && isSideBValid && isSideCValid) {
        if (
            sideA + sideB >= sideC &&
            sideA + sideC >= sideB &&
            sideB + sideC >= sideA
        ) {
            let msg = "";
            if (sideA === sideB && sideA === sideC && sideB === sideC) {
                msg = "Equilateral";
            } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
                msg = "Scalene";
            } else {
                msg = "Isosceles";
            }
            outResponse1.innerText = "The sides form a triangle.";
            outResponse2.innerText = `Type: ${msg}`;
        } else {
            outResponse1.innerText = "The sides don't form a triangle.";
        }
    }
});
