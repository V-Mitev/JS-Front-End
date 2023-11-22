function solve(input) {
	let words = [];

	let wordsToSearch = input[0].split(" ");

	for (let i = 0; i < wordsToSearch.length; i++) {
		words.push({ word: wordsToSearch[i], counter: 0 });
	}

	for (let i = 1; i < input.length; i++) {
		for (const wordObj of words) {
			if (wordObj.word === input[i]) {
				wordObj.counter++;
			}
		}
	}

	for (const wordObj of words.sort((a, b) => b.counter - a.counter)) {
		console.log(`${wordObj.word} - ${wordObj.counter}`);
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
