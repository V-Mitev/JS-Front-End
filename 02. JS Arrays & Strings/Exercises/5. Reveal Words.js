function solve(words, text) {
	let wordsArray = words.split(", ");
	let textArray = text.split(" ");

	for (let i = 0; i < wordsArray.length; i++) {
		for (let j = 0; j < textArray.length; j++) {
			let isMatch =
				textArray[j].includes("*") &&
				textArray[j].length === wordsArray[i].length;

			if (isMatch) {
				textArray[j] = wordsArray[i];
			}
		}
	}

	console.log(textArray.join(" "));
}

solve(
	"great, learning",
	"softuni is ***** place for ******** new programming languages"
);
