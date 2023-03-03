"use strict";

{
    const isDataValid = false;

    do {
        console.log("This conditon was executed...");
    } while (isDataValid);
}

console.log();

{
    const isDataValid = false;

    while (isDataValid) {
        console.log("This conditon was not executed...");
    }
}

console.log();

{
    let counter = 10;

    while (counter >= 0) {
        console.log(counter--);
    }
}
