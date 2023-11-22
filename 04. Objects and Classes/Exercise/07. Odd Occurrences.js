function solve(input) {
	let words = [];
    let result = '';

	input = input.toLowerCase();

	for (const word of input.split(" ")) {
		let wordExists = words.find((w) => w.word === word);

		if (wordExists) {
			wordExists.counter++;
		} else {
			words.push({ word, counter: 1 });
		}
	}

	for (const word of words) {
        if (word.counter % 2 != 0) {
             result += `${word.word} `;
        }
	}

    console.log(result);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
