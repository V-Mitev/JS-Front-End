function solve(numOne, numTwo, numThree){
    let result = numOne * numTwo * numThree;

    if (result > 0) {
        return console.log("Positive");
    }

    console.log("Negative");
}

solve(-6, -12, -14);