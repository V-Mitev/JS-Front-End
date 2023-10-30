function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
	let sum = 0;

	if (typeOfGroup === "Students") {
		if (dayOfWeek === "Friday") {
			sum = groupOfPeople * 8.45;
		} else if (dayOfWeek === "Saturday") {
			sum = groupOfPeople * 9.8;
		} else {
			sum = groupOfPeople * 10.46;
		}

		if (groupOfPeople >= 30) {
			sum *= 0.85;
		}
	} else if (typeOfGroup === "Business") {
		let priceOfCurrentDay = 0;

		if (dayOfWeek === "Friday") {
			priceOfCurrentDay = 10.9;

			sum = groupOfPeople * 10.9;
		} else if (dayOfWeek === "Saturday") {
			priceOfCurrentDay = 15.6;

			sum = groupOfPeople * 15.6;
		} else {
			priceOfCurrentDay = 16;

			sum = groupOfPeople * 16;
		}

		if (groupOfPeople >= 100) {
			sum -= 10 * priceOfCurrentDay;
		}
	} else {
		if (dayOfWeek === "Friday") {
			sum = groupOfPeople * 15;
		} else if (dayOfWeek === "Saturday") {
			sum = groupOfPeople * 20;
		} else {
			sum = groupOfPeople * 22.5;
		}

		if (groupOfPeople >= 10 && groupOfPeople <= 20) {
			sum *= 0.95;
		}
	}

	console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");
