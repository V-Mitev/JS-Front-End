function solve(array, n) {
    for (let i = 0; i < n; i++) {
        let currentNumber = array.shift();

        array.push(currentNumber);
    }

    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);