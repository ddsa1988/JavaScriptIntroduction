"use strict";
const inForm = document.querySelector("form");
const outResponse = document.querySelector("h3");

const timeZone = 5;

inForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const timeString = inForm.inTime.value;
    const [hourString, minString] = timeString.split(":");
    const minFrance = Number(minString);
    let hourFrance = Number(hourString) + timeZone;

    if (hourFrance >= 24) {
        hourFrance = hourFrance - 24;
    }

    outResponse.innerText = `Time in France: ${hourFrance}:${minFrance}`;
});
