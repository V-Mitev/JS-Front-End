function friuts(fruit, weight, price) {
    weight /= 1000;

    let sum = weight * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

friuts('apple', 2500, 1.80);