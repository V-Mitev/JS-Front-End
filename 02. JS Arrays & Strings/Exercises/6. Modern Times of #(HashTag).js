function solve(text) {
	let regex = /#[A-za-z]+/gm;

	let matches = text.match(regex);

	for (let word of matches) {
		word = word.replace("#", "");
		console.log(word);
	}
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
