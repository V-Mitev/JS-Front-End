function solve(input) {
    let numToString = String(input).split('');
    
    let oddSum = 0;
    let evenSum = 0;

    for (const num of numToString) {
        let number = Number(num);

        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
