function solve(num1, num2, operator) {
	switch (operator) {
		case "add":
			console.log(num1 + num2);
			break;
		case "subtract":
			console.log(num1 - num2);
			break;
		case "plus":
			console.log(num1 + num2);
			break;
		case "divide":
			console.log(num1 / num2);
			break;
		case "multiply":
			console.log(num1 * num2);
	}
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "subtract");
