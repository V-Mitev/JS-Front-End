function solve(input, products) {
	let obj = {};

	for (let i = 0; i < input.length; i += 2) {
		let name = input[i];
		let quantity = Number(input[i + 1]);

        obj[name] = quantity;
	}

    for (let i = 0; i < products.length; i += 2) {
		let name = products[i];
		let quantity = Number(products[i + 1]);

		if (Object.keys(obj).includes(name)) {
			obj[name] += quantity;
		} else {
			obj[name] = quantity;
		}
	}

	for (const [key, value] of Object.entries(obj)) {
		console.log(`${key} -> ${value}`);
	}
}

solve(
	["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
	["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
