function solve(input) {
	let words = [];

	let wordsToSearch = input[0].split(" ");
	let counter = Number(0);

	for (let i = 0; i < wordsToSearch.length; i++) {
		words[wordsToSearch[i]] = counter;
	}

	for (let i = 1; i < input.length; i++) {
		for (const word of Object.keys(words)) {
			if (word === input[i]) {
				words[word]++;
			}
		}
	}

	for (const [key, value] of Object.entries(words).sort((a, b) => b[1] - a[1])) {
		console.log(`${key} - ${value}`);
	}
}

solve([
	"is the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"the",
	"And",
	"finally",
	"the",
	"the",
	"sentence",
]);
