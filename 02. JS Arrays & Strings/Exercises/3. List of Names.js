function solve(array) {
	let newArray = [];
	for (let i = 0; i <= array.length - 1; i++) {
		newArray.push(array[i]);
	}

	newArray.sort();

	for (let i = 0; i <= array.length - 1; i++) {
		newArray[i] = `${i + 1}.${newArray[i]}`;
	}

	console.log(newArray.join("\n"));
}

solve(["John", "Bob", "Christina", "Ema"]);
