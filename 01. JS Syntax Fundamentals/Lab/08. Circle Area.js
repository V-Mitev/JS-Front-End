function CircleArea(input) {
	let CircleArea;
	let typeOfInput = typeof input;

	if (typeOfInput === "number") {
		CircleArea = Math.pow(input, 2) * Math.PI;

		console.log(CircleArea.toFixed(2));
	} else {
		console.log(
			`We can not calculate the circle area, because we receive a ${typeOfInput}.`
		);
	}
}

CircleArea("6");
CircleArea(5);
