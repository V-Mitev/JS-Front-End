function solve(array) {
	let newArray = [];
	let orderedArray = [];

	array.forEach((element) => {
		newArray.push(element);
	});

	while (newArray.length > 0) {
		let smallestNumber = Number.MAX_VALUE;
		let indexOfSmallestNum = 0;
		let biggestNumber = Number.MIN_VALUE;
		let indexOfBigestNum = 0;

		for (let i = 0; i <= newArray.length - 1; i++) {
			if (smallestNumber > newArray[i]) {
				smallestNumber = newArray[i];
				indexOfSmallestNum = newArray.indexOf(smallestNumber);
			}

			if (biggestNumber < newArray[i]) {
				biggestNumber = newArray[i];
				indexOfBigestNum = newArray.indexOf(biggestNumber);
			}
		}

		newArray.splice(indexOfSmallestNum, 1);
		newArray.splice(indexOfBigestNum, 1);

		orderedArray.push(smallestNumber);
		orderedArray.push(biggestNumber);
	}

	console.log(orderedArray);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
