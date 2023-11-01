function solve(n, array){
    let newArray = [];

    for (let i = 0; i < n; i++) {
        let element = array[i];
        newArray.push(element);
    }

    console.log(newArray.reverse().join(' '));
}

solve(3, [9, 5, 154, 4, 5]);