function cookingByNumbers(numberAsString, op1, op2, op3, op4, op5) {
    let number = Number(numberAsString);

    let opObj = {
        op1, op2, op3, op4, op5
    }

    for (let i = 1; i <= 5; i++) {
        let key = 'op' + i;

        switch (opObj[key]) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.8;
                console.log(number);
                break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');