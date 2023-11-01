function solve(array) {
	let evenNumbersSum = 0;
	let oddNumbersSum = 0;

	for (let i = 0; i < array.length; i++) {
		let isNumberIsEven = array[i] % 2 === 0;

		if (isNumberIsEven) {
			evenNumbersSum += array[i];
		} else {
			oddNumbersSum += array[i];
		}
	}

	console.log(evenNumbersSum - oddNumbersSum);
}

solve([1, 2, 3, 4, 5, 6]);
