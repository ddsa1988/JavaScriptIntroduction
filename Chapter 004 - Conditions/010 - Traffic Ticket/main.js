"use stric";

const inForm = document.querySelector("form");
const outResponse = document.querySelector("#outResponse");
const tolerance = 1 + 20 / 100;

inForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const speedLimit = Number(inForm.inSpeedLimit.value);
    const driverSpeed = Number(inForm.inDriverSpeed.value);

    const isSpeedLimitValid =
        Number.isFinite(speedLimit) && speedLimit > 0 && speedLimit < 300;

    const isDriverSpeedValid =
        Number.isFinite(driverSpeed) && driverSpeed > 0 && driverSpeed < 300;

    if (isSpeedLimitValid && isDriverSpeedValid) {
        const speedTolerance = speedLimit * tolerance;
        const answer =
            driverSpeed <= speedLimit
                ? "No ticket"
                : driverSpeed <= speedTolerance
                ? "Light Ticket"
                : "Severe Ticket";

        outResponse.innerText = `Situation: ${answer}`;
    }
});
