"use strict";

// Book page: 55

const inMovieName = document.querySelector("#inMovieName");
const inRunningTime = document.querySelector("#inRunningTime");
const inSubmit = document.querySelector("#inSubmit");
const outMovieName = document.querySelector("h3");
const outRunnigTime = document.querySelector("h4");

inSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const movie = String(inMovieName.value).trim();
    const runningTime = Math.trunc(Number(inRunningTime.value));
    const hour = Math.trunc(runningTime / 60);
    const min = runningTime % 60;
    const text = `${hour} hour${min > 0 ? ` and ${min} minutes.` : "."}`;

    outMovieName.innerText = "";
    outRunnigTime.innerText = "";

    if (movie !== "" && runningTime > 0) {
        outMovieName.innerText = movie;
        outRunnigTime.innerText = text;
    }
});
