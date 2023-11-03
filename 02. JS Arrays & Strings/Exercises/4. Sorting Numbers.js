function solve(array) {
	let orderedArray = [];

	while (array.length > 0) {
		let smallestNumber = Number.MAX_VALUE;
		let indexOfSmallestNum = 0;
		let biggestNumber = Number.MIN_VALUE;
		let indexOfBigestNum = 0;

		for (let i = 0; i <= array.length - 1; i++) {
			if (smallestNumber > array[i]) {
				smallestNumber = array[i];
			}

			if (biggestNumber < array[i]) {
				biggestNumber = array[i];
			}
		}

		indexOfSmallestNum = array.indexOf(smallestNumber);
		array.splice(indexOfSmallestNum, 1);

		indexOfBigestNum = array.indexOf(biggestNumber);
		array.splice(indexOfBigestNum, 1);

		orderedArray.push(smallestNumber);
		orderedArray.push(biggestNumber);
	}

	console.log(orderedArray.join('\n'));
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
