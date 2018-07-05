function solve(input) {
    "use strict";
    let size = Number(input[0]);
    let array = new Array(size).fill(0);
    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(" ");
        array[Number(tokens[0])] = Number(tokens[2]);
    }
    for (let number of array) {
        console.log(number);
    }
}


solve([3, "0 - 5", "1 - 6", "2 - 7"]);
solve([2, "0 - 5", "0 - 6", "0 - 7"]);
