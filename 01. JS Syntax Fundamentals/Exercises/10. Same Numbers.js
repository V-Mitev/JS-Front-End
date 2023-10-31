function sameNumbers(number) {
	let numAsString = String(number);
	let isAllNumbersAreEqual = true;
	let sum = 0;

	for (i = 0; i < numAsString.length; i++) {
		if (numAsString[0] === numAsString[i] && isAllNumbersAreEqual) {
			sum += Number(numAsString[i]);
		} else {
			isAllNumbersAreEqual = false;
			sum += Number(numAsString[i]);
		}
	}

	console.log(isAllNumbersAreEqual);
	console.log(sum);
}

sameNumbers(1234);
