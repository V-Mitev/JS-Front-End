function sumOfDigits(digits) {
    let sum = 0;
    let numAsString = String(digits);
    
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    console.log(sum);
}

sumOfDigits(245678);