function solve(numbers) {
    "use strict";
    let numberOne = Number(numbers[0]);
    let numberTwo = Number(numbers[1]);
    if (numberOne <= numberTwo) {
        console.log((numberOne * numberTwo));
    } else {
        console.log((numberOne / numberTwo));
    }
}

solve([2, 2]);
solve([-6, 0]);
solve([0.5, 80]);
solve(["abcd", 67]);
