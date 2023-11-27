function solve(input) {
	for (let row = 1; row <= input; row++) {
		let number = String(input);
		let result = "";

		for (let col = 1; col <= input; col++) {
			result += `${number} `;
		}

		console.log(result.trimEnd());
		result = "";
	}
}

solve(3);
