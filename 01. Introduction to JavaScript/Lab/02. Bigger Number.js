function solve(numbers) {
    "use strict";
    let firstNumber = Number(numbers[0]);
    let secondNumber = Number(numbers[1]);
    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else {
        console.log(secondNumber);
    }
}

solve([10, 20]);
solve([20, 10]);
solve([10, 10]);
