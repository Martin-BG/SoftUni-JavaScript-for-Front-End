function solve(numbers) {
    "use strict";
    let negativeNumbers = 0;
    for (let element of numbers) {
        let num = Number(element);
        if (num < 0) {
            negativeNumbers++;
        } else if (num === 0) {
            console.log("Positive");
            return;
        }
    }

    if (negativeNumbers % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

solve([2, 2, 2]);
solve([-6, 0, 1]);
solve([-0.5, -80, 3]);
solve([-0.5, -80, -3]);
solve(["abcd", 67, 5]);
