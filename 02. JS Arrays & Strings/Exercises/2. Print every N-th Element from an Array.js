function solve(array, n) {
	let newArray = [];

	for (let i = 0; i <= array.length - 1; i += n) {
		let element = array[i];

		newArray.push(element);
	}

	return newArray;
}

solve(["5", "20", "31", "4", "20"], 2);
