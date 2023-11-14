function solve(product, quantity){
    let totalPrice = 0;
    let productPrice = 0;

    if (product === 'water') {
        productPrice = 1;
        totalPrice = quantity * productPrice;
    } else if (product === 'coffee') {
        productPrice = 1.5;
        totalPrice = quantity * productPrice;
    } else if (product === 'coke') {
        productPrice = 1.4;
        totalPrice = quantity * productPrice;
    } else if (product === 'snacks') {
        productPrice = 2;
        totalPrice = quantity * productPrice;
    }

    console.log(totalPrice.toFixed(2));
}

solve('coffee', 2);