function solve(numbers) {
    let numBackward = '';

    for (const number of numbers) {
        let numAsString = String(number).split('');

        for (let i = numAsString.length - 1; i >= 0 ; i--) {
            numBackward += numAsString[i];
        }

        if (number === Number(numBackward)) {
            console.log('true');
        } else {
            console.log('false');
        }

        numBackward = '';
    }

    console.log(numBackward);
}

solve([123,323,421,121]);