function printAndSum(num1, num2) {
    let sum = 0;
    let numAsString = '';

    for(i = num1; i <= num2; i++){
        numAsString += String(i) + ' ';
        sum += i;
    }

    console.log(numAsString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
